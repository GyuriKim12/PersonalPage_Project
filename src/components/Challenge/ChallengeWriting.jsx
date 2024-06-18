import './ChallengeWriting.css'
import EditButton from '../EditButton'
import { useEffect, useState } from 'react'
import getStringDate from '../../utils/getStringDate'
import { useNavigate } from 'react-router'

const ChallengeWriting = ({ onCreate, onUpdate, initData }) => {
    const [input, setInput] = useState({
        startDate: new Date().getTime(),
        subject: "",
        state: false,
        daily: []
    });

    const nav = useNavigate()

    useEffect(() => {
        if (initData) {
            setInput({ ...initData })
        }
    }, [initData])

    const [change, setChange] = useState(false)

    const [clickedButton, setClickedButton] = useState();

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        if (name === "startDate") {
            setInput({ ...input, [name]: new Date(value).getTime() })
        }
        else {
            setInput({ ...input, [name]: value })
        }
        setChange(true)
    }

    const blank = () => {
        if (!change) return true;
        return false;
    }
    const blankCheck = blank()

    const onSetDuration = (day) => {
        let list = []
        if (initData) {
            const init = initData.daily
            //더 작은 날로 선택
            if (day < init.length) {
                for (var i = 0; i < day; i++) {
                    list.push(init[i])

                }
            }
            //더 큰 날로 선택
            else if (day > init.length) {

                for (var k = 0; k < day; k++) {
                    if (k < init.length) {
                        list.push(init[k])
                    }
                    else {
                        list.push({
                            item: "",
                            ischecked: false,
                        })
                    }
                }
            }
            //같은 날로 선택
            else list = init
        }
        else {
            for (var j = 0; j < day; j++) {
                list.push({
                    item: "",
                    ischecked: false,
                })
            }

        }
        if (list[list.length - 1].ischecked) {
            setInput({ ...input, "daily": list, "state": true })
        }
        else {
            setInput({ ...input, "daily": list, "state": false })

        }
        setChange(true)
        setClickedButton(day)
    }

    const onSave = () => {
        if (initData) {
            if (window.confirm('수정 내용을 저장하시겠습니까?')) {
                onUpdate(input.id, input.startDate, input.subject, input.state, input.daily)
                nav(-1, { replace: true })
            }
            else {
                return
            }

        }
        else {
            if (input.subject === "" || input.daily.length === 0) {
                window.confirm("입력을 모두 완료하세요 !")
                return
            }
            onCreate(input.startDate, input.subject, input.state, input.daily)
            nav(-1, { replace: true })
        }

    }

    return <div className='ChallengeWriting'>
        <div className='BoardHeader'>
            <EditButton text={"<"} nav={"challenge"} blank={blankCheck} />
            <h2>Start a Challenge 🦕 <br />that make your  Life Interesting </h2>
        </div>

        <div className='Challenge_sub'>
            <div className='Challenge_sub_div '>
                <div className='Challenge_sub_div_h2'>

                    <div className='sub_div_imoji'>
                        <div>
                            <h2>🎧</h2>
                        </div>
                        <div>
                            <h2>💻</h2>
                        </div>
                        <div>
                            <h2>📷</h2>
                        </div>
                    </div>
                    <div className='sub_div_title'>
                        {`You Can`} <span>{`(EveryThing!)`}</span> <br />So You Can <br />Choose <span>{`(Anyting!)`}</span>
                    </div>
                </div>
            </div>

        </div>

        <section className='due_seciton'>
            <h3>{`☐ Choose your Challenge duration`}</h3>
            <div className='due_button'>
                <div>
                    <div>Click!</div>
                    <button className={clickedButton === 7 ? 'DueButton clicked' : 'DueButton'}
                        onClick={() => onSetDuration(7)}>( 7 ) Day</button>
                </div>

                <div>
                    <div>Click!</div>
                    <button className={clickedButton === 15 ? 'DueButton clicked' : 'DueButton'}
                        onClick={() => onSetDuration(15)}>( 15 ) Day</button>
                </div>

                <div>
                    <div>Click!</div>
                    <button className={clickedButton === 30 ? 'DueButton clicked' : 'DueButton'}
                        onClick={() => onSetDuration(30)}>( 30 ) Day</button>
                </div>

            </div>

        </section>

        <section className='subject_seciton'>
            <h3>{`☐ What's the Subject of your Challenge?`}</h3>
            <input name={'subject'} value={input.subject} onChange={onChange} maxLength={50}
                placeholder='Subject is ...'></input>
        </section>

        <section className='start_seciton'>
            <h3>{`☐ When you Start this Challenge?`}</h3>
            <input
                name='startDate' value={getStringDate(new Date(input.startDate))} onChange={onChange}
                type='date' />
        </section>

        <section className='challenge_button'>
            <button onClick={onSave}>📁</button>
        </section>
    </div>
}

export default ChallengeWriting