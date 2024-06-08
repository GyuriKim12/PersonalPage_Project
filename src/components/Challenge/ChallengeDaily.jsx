import { useEffect, useState, useRef } from 'react';
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
    const wasLastCheckboxChecked = useRef(false);


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

    const dailySaved = (index) => {
        if (input.daily[index].item !== "") {
            return true
        }
        else {
            window.alert(`Day ${index + 1} 내용을 먼저 저장해주세요`)
            return false
        }
    }

    const onChangeChecked = (index) => {
        if (dailySaved(index)) {
            onUpdateChecked(input, index);
            if (index === input.daily.length - 1) { // 마지막 체크박스일 때
                onUpdateChecked(input, index);
            }
        } else {
            return;
        }
    };

    useEffect(() => {
        const lastCheckboxChecked = input.daily[input.daily.length - 1].ischecked;
        if (lastCheckboxChecked) {
            wasLastCheckboxChecked.current = true;
        }
        if (wasLastCheckboxChecked.current) {
            onUpdateState(input);

        }
    }, [input.daily]);

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
        </div>
    );
};

export default ChallengeDaily;
