import TodoItem from "./TodoItem";
import './../Diary/DiaryHeader.css'
import { useState } from "react";
import { useNavigate } from "react-router";

const TodoList = ({ data }) => {
    const [state, setState] = useState("latest");
    const nav = useNavigate()

    const onChangeState = (e) => {
        setState(e.target.value)
    }

    const sortedData = (data) => {
        return data.toSorted((a, b) => {
            if (state === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate)
            }
            else {
                return Number(b.createdDate) - Number(a.createdDate)
            }
        })
    }

    const sortedDate = sortedData(data)

    return <div className="DiaryList">
        <div className="menu_h3">
            <div className="h3">
                <h4 >{`You're The only Main Character`}<br /> {`in Your Life! Don't Worry-! You Can Do it`}</h4>
            </div>
            <div className="menu_h3_sub">
                <p>Everyth!ng <br />Will be Alringt!</p>
            </div>

        </div>
        <div className="menu_bar">
            <select onClick={onChangeState}>
                <option value={"latest"}>latest</option>
                <option value={"oldest"}>oldest</option>
            </select>
            <button onClick={() => nav('/todo/new')}>✏️Click Hear and Realize your perfect Day</button>

        </div>
        <div>
            {sortedDate.map((item) => {
                if (item.todo.length > 0) return <TodoItem key={item.id} {...item} />
                else return null
            })}
        </div>

    </div>
}

export default TodoList;