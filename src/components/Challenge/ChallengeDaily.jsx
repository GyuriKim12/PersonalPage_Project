import { useEffect, useState } from 'react';
import './ChallengeDaily.css';

const ChallengeDaily = ({ filtered, onUpdate, onUpdateChecked, onUpdateState }) => {
    const [input, setInput] = useState(
        {
            id: filtered.id,
            startDate: filtered.startDate,
            subject: filtered.subject,
            state: filtered.state,
            daily: filtered.daily,
        }
    )

    useEffect(() => {
        if (filtered) {
            setInput({
                id: filtered.id,
                startDate: filtered.startDate,
                subject: filtered.subject,
                state: filtered.state,
                daily: filtered.daily,
            }
            )
        }
    }, [filtered])


    const onChange = (e, index) => {
        let name = e.target.name
        let value = e.target.value
        if (name === 'item') {
            const updatedDaily = [...input.daily];
            updatedDaily[index] = { ...updatedDaily[index], [name]: value };
            setInput({ ...input, daily: updatedDaily });
        }

    }

    const onChangeChecked = (index) => {
        if (dailySaved(index)) {
            // let checked = true;
            // for (let i = 0; i < input.daily.length; i++) {
            //     if (!input.daily[i].ischecked) {
            //         checked = false;
            //         break;
            //     }
            // }
            onUpdateChecked(index);

            // onUpdateState({ ...input, state: checked });
        } else {
            return;
        }
    };

    useEffect(() => {
        let checked = true;
        for (let i = 0; i < input.daily.length; i++) {
            if (!input.daily[i].ischecked) {
                checked = false;
                break;
            }
        }
        onUpdateState({ ...input, state: checked });
    }, [input.daily]);


    const finalChecked = () => {
        let checked = false
        for (let i = 0; i < input.daily.length; i++) {
            if (input.daily[i].ischecked) {
                checked = true
            }
            else {
                checked = false;
            }
        }
        if (checked) {
            onUpdateState({ ...input, state: checked });
        }
        else {
            window.alert('Challenge가 끝까지 완수되지 않았습니다.')
            return;
        }

    }

    const dailySaved = (index) => {
        if (input.daily[index].item !== "") {
            return true
        }
        else {
            window.alert(`Day ${index + 1} 내용을 먼저 저장해주세요`)
            return false
        }
    }


    return (
        <div className="ChallengeDaily">
            {filtered.daily.map((item, index) => (
                <div className="dailyItem" key={index}>
                    <section className='dailyFirst'>
                        <div className='dailyFirst_h2'>
                            <h2>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h2>
                        </div>

                        <div className='dailyFirst_input'>
                            <label htmlFor={`checked-${index}`}>Checked!</label>

                            <input readOnly type="checkbox"
                                id={`checked-${index}`}
                                checked={item.ischecked}
                                onChange={() => onChangeChecked(index)} />
                        </div>

                    </section>
                    <section className='dailySecond'>
                        <textarea className='text' type='text'
                            name='item'
                            value={input.daily[index].item}
                            onChange={(e) => onChange(e, index)}
                            placeholder={`Enter Day ${index + 1} Challenge `} />
                        <button onClick={() => onUpdate(input, index)}>📁</button>
                    </section>

                </div>
            ))}
            {/* <div className='finalCheck'>
                <div>
                    If U
                </div>
                <button onClick={() => finalChecked()}>Finish?! ☑️( Click ) Hear!</button>
            </div> */}
        </div>
    );
};

export default ChallengeDaily;
