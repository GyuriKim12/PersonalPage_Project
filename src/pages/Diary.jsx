import DiaryHeader from "../components/Diary/DiaryHeader";
import DiaryList from "../components/Diary/DiaryList";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";
import getFilteredDate from "../utils/getFilteredDate";

const Diary = () => {

    const data = useContext(DiaryStateContext)
    const [pivotDate, setDate] = useState(new Date())

    const onIncreaseMonth = () => {
        setDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    }

    const onDecreaseMonth = () => {
        setDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    }

    const getMonth = pivotDate.toLocaleDateString("en-US", { month: "long" })
    const getYear = pivotDate.getFullYear()

    const filtered = getFilteredDate(pivotDate, data);

    return <div>
        <DiaryHeader
            getMonth={getMonth} getYear={getYear}
            onIncreaseMonth={onIncreaseMonth} onDecreaseMonth={onDecreaseMonth} />
        <DiaryList data={filtered} />
    </div>
}

export default Diary;