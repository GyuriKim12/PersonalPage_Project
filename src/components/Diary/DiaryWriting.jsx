import './DiaryWriting.css'
import EmotionItem from './EmotionItem';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { DiaryStateContext } from '../../App';
import EditButton from '../EditButton';
import getStringDate from '../../utils/getStringDate';

const EmotionList = [
    {
        emotionId: 1, emotionName: "Very Good"
    },
    {
        emotionId: 2, emotionName: "Good"
    },
    {
        emotionId: 3, emotionName: "so so"
    },
    {
        emotionId: 4, emotionName: "bad..."
    },
    {
        emotionId: 5, emotionName: "Very bad"
    },
]

const DiaryWriting = ({ onSubmitDiary, edit, initData, onDeleteDiary }) => {
    const nav = useNavigate()
    const data = useContext(DiaryStateContext)
    const contentRef = useRef();
    const [input, setInput] = useState({
        createdDate: new Date(),
        emotionId: 2,
        content: "",
    });
    const [chamge, setChange] = useState(false);


    useEffect(() => {
        if (initData) {
            setInput({ ...initData, createdDate: new Date(Number(initData.createdDate)) })
        }
    }, [initData])

    useEffect(() => {
        const today = new Date();
        const todayDiary = data.find(
            item => new Date(item.createdDate).toLocaleDateString() === today.toLocaleDateString()
        );

        if (todayDiary) {
            setInput({
                createdDate: new Date(todayDiary.createdDate),
                emotionId: todayDiary.emotionId,
                content: todayDiary.content,
            });
        } else {
            setInput({
                createdDate: today,
                emotionId: 2,
                content: "",
            });
        }
    }, [data]);

    const onCreateInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'createdDate') {
            const existingData = data.find(item => new Date(item.createdDate).toLocaleDateString() === new Date(value).toLocaleDateString());

            if (existingData) {
                setInput({
                    createdDate: new Date(existingData.createdDate),
                    emotionId: existingData.emotionId,
                    content: existingData.content,
                });
            } else {
                setInput({
                    createdDate: new Date(value),
                    emotionId: 2,
                    content: ""
                });
            }

        }

        else {
            setInput({
                ...input, [name]: value,
            })
        }
        setChange(true)

    }

    const blank = () => {
        if (!chamge) return true;
        return false;
    }

    const blankCheck = blank()

    const getYear = input.createdDate.getFullYear()
    const getMonth = input.createdDate.toLocaleDateString("en-US", { month: "long" }).charAt(0).toUpperCase() +
        input.createdDate.toLocaleDateString("en-US", { month: "long" }).slice(1)
    const getDate = input.createdDate.getDate()

    const onSave = () => {
        if (input.content === "") {
            contentRef.current.focus();
            return
        }
        onSubmitDiary(input)
        nav(-1);
    }

    const onDelete = () => {
        onDeleteDiary(input)
    }

    return <div className='DiaryWriting'>
        <div className='DiaryHeader'>
            <EditButton text={"<"} nav={"diary"} blank={blankCheck} />
            <h2> It&rsquo;s about {getYear} {getMonth} {getDate} 🦕 !
            </h2>
            <div></div>
        </div>
        <div className='subtitle'>
            <div className='subtitle_sub'>
                <div className='subtitle_1'>
                    <div className='subtitle_div'>
                        <h4>{`How to━Calculate`}<br /> {`Sum of`} <span className='h4_emotion'>Emotions?!</span></h4>
                    </div>
                    <div className='subtitle_div2'>
                        <div className='h3'>
                            <div>
                                <h1>
                                    {`😃`}
                                </h1>
                                <div>{`(n/100) + `}</div>
                            </div>

                            <div>
                                <h1>
                                    {`😠`}
                                </h1>
                                <div>{`(n/100) + `}</div>
                            </div>

                            <div>
                                <h1>
                                    {`😥`}
                                </h1>
                                <div>{`(n/100) + `}</div>
                            </div>

                            <div>
                                <h1>
                                    {`🥰`}
                                </h1>
                                <div>{`(n/100) + `}</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='title_100'>Total is 100!</div>
            </div>
        </div>
        <section className={`date_${edit}`}>
            <h3>☐ Select Date !</h3>
            <input
                name='createdDate'
                value={getStringDate(input.createdDate)}
                onChange={onCreateInput} type='date' />
        </section>
        <section className='emotion_section'>
            <h3>☐ #menow</h3>
            <div>
                {EmotionList.map((item) => <EmotionItem
                    onClick={() =>
                        onCreateInput({
                            target: {
                                name: "emotionId",
                                value: item.emotionId,
                            }
                        })}
                    key={item.emotionId} emotionId={item.emotionId} emotionName={item.emotionName}
                    isSelected={item.emotionId === input.emotionId ? input.emotionId : ""} />)}
            </div>
        </section>
        <section className='writing_section'>
            <h3>☐ Writing about your Day</h3>
            <textarea
                name='content'
                value={input.content}
                ref={contentRef}
                onChange={onCreateInput}
                placeholder='저는 그릭요거트만 먹는 초식 브라키오인걸요..!' />
        </section>
        <section className='button_section'>
            <button className={`delete_${edit}`} onClick={onDelete}>🗑️</button>
            <button onClick={onSave}>📁</button>
        </section>
    </div>
}

export default DiaryWriting;