import { useContext, useState } from "react"
import BoardList from "../components/Board/BoardList"
import { BoardStateContext } from "../App"

import getFilteredDate from "../utils/getFilteredDate"

const Board = () => {
    const data = useContext(BoardStateContext)
    const [pivotDate, setPivotDate] = useState(new Date());

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))

    }

    const getMonth = pivotDate.toLocaleDateString("en-US", { month: "long" })
    const getYear = pivotDate.getFullYear()

    const filtered = getFilteredDate(pivotDate, data);

    return <div><BoardList data={filtered} getYear={getYear} getMonth={getMonth} onIncreaseMonth={onIncreaseMonth} onDecreaseMonth={onDecreaseMonth} /></div>
}

export default Board