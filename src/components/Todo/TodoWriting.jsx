import './TodoWriting.css'
import Button from '../Button';
import TodoToday from './TodoToday';
import { useState, useRef, useEffect, useContext } from 'react';
import { DiaryStateContext } from '../../App';

const getStringDate = (date) => {
    let getYear = date.getFullYear()
    let getMonth = date.getMonth() + 1
    let getDate = date.getDate()

    if (getMonth < 10) {
        getMonth = `0${getMonth}`
    }
    if (getDate < 10) {
        getDate = `0${getDate}`
    }

    return `${getYear}-${getMonth}-${getDate}`
}


const TodoWriting = ({ onSubmit, onUpdateTodo, onDeleteTodo, initData, edit, onProcess }) => {
    const data = useContext(DiaryStateContext)
    const contentRef = useRef();
    const [input, setInput] = useState({
        createdDate: new Date(),
        todo: [{
            item: "",
            ischecked: false,
        }],
    });
    const today = data.find((item) => {
        return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
    });

    const [state, setState] = useState("");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (initData) {
            const updatedInput = {
                ...initData,
                createdDate: new Date(Number(initData.createdDate)),
                todo: initData.todo.map(todoItem => ({ ...todoItem, item: '' }))
            };
            setInput(updatedInput);
            setProgress(onProcess(initData.id))
        }
    }, [initData]);

    useEffect(() => {
        if (today) {
            const updatedInput = {
                ...today,
                createdDate: new Date(Number(today.createdDate)),
                todo: today.todo.map(todoItem => ({ ...todoItem, item: '' }))
            };
            setInput(updatedInput);
            setProgress(onProcess(today.id))
        }
    }, [today])

    useEffect(() => {
        if (!data.find(item => new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString())) {
            setInput(prevInput => ({
                ...prevInput,
                todo: [{ item: "", ischecked: false }]
            }));
            setProgress(0);
        }
    }, [data, input.createdDate]);

    const todayData = data.filter((item) => new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString())

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        if (name === "todo") {
            setInput({
                ...input,
                [name]: [{ item: value, ischecked: false }]
            });
        }
        if (name === "createdDate") {
            setInput({ ...input, createdDate: new Date(value) })
        }
    }

    const onCreateTodo = () => {
        if (input.todo[0].item === "") {
            contentRef.current.focus()
            return
        }
        onSubmit(input)
        setProgress(onProcess(input.id))
    }

    const onChange = (e) => {
        setState(e.target.value)

    }

    const getfilteredData = () => {
        if (state === "")
            return todayData
        return todayData.map((item) => ({
            ...item,
            todo: item.todo.filter((todoItem) =>
                todoItem.item.toLowerCase().includes(state.toLowerCase()))
        }))
    }

    const filteredData = getfilteredData()

    const getYear = input.createdDate.getFullYear()
    const getMonth = input.createdDate.toLocaleDateString("en-US", { month: "long" }).charAt(0).toUpperCase() +
        input.createdDate.toLocaleDateString("en-US", { month: "long" }).slice(1)
    const getDate = input.createdDate.getDate()



    return <div className='TodoWriting'>
        <div className='DiaryHeader'>
            <Button text={"<"} nav={"todo"} />
            <h2>{getYear} {getMonth} {getDate} To-do List
                <br />You Can Do - It !</h2>
            <div></div>
        </div>

        <div className='TodoList_sub'>
            <div className='Todo_div2'>
                <h1>{`🤔💭 🧐💬 😎🤟 🤗‼️`}</h1>
                <h4>Think ▶️ Find out ▶️ Realize ▶️ Rise up Dream</h4>
            </div>
            <div className='Todo_div'>
                <h4 className='realize'>Realize<br />Your<br />Dream</h4>
                <h4 className='growing'>Growing<br />Your<br />Dream</h4>
            </div>

        </div>

        <div className='todosection'>
            <div className='todo_add_search'>

                <section className={`date date_${edit}`}>
                    <h3>☐ Select Date !</h3>
                    <input type='date' name='createdDate' value={getStringDate(input.createdDate)}
                        onChange={onChangeInput} />
                </section>

                <section className='add'>
                    <h3>☐ Add to your to-do list</h3>
                    <div>
                        <input
                            name='todo'
                            value={input.todo.length > 0 ? input.todo[0].item : ''}
                            ref={contentRef}
                            onChange={onChangeInput}
                            placeholder='writing your to-do' />
                        <button onClick={onCreateTodo}>📁</button>
                    </div>

                </section>

                <section className='search'>
                    <h3>☐ Search for your to-do</h3>
                    <div>
                        <input
                            onChange={onChange}
                            value={state}
                            placeholder="find your to-do" />

                    </div>

                </section>

                <section className='todoProgress'>
                    <h3>☐ To-do Progress rate</h3>
                    <div className='progress-bar'>
                        <div className='Changeprogress' style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className='progress_sen'>
                        <h4>0</h4>
                        <h4>Done!</h4>
                    </div>
                </section>

            </div>
            <div className='todo_list'>
                <section className='list-wrapper'>
                    <h3>☐ It&rsquo;s your To-do List</h3>
                    {filteredData.map((item) => {
                        return <TodoToday key={item.id} {...item} data={todayData} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
                    })}

                </section>
            </div>
        </div>




    </div>
}

export default TodoWriting;