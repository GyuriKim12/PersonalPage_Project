import TodoHeader from "../components/Todo/TodoHeader";
import TodoList from "../components/Todo/TodoList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import getFilteredDate from "../utils/getFilteredDate";

const Todo = () => {
    const data = useContext(DiaryStateContext)
    const [pivotDate, setPivotDate] = useState(new Date())
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    const filteredData = getFilteredDate(pivotDate, data);

    const getYear = pivotDate.getFullYear()
    const getMonth = pivotDate.toLocaleDateString("en-US", { month: "long" })

    return <div>
        <TodoHeader getYear={getYear} getMonth={getMonth} onIncreaseMonth={onIncreaseMonth} onDecreaseMonth={onDecreaseMonth} />
        <TodoList data={filteredData} />
    </div>
}

export default Todo;