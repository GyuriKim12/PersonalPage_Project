import { useContext, useState } from "react"
import ChallengeList from "../components/Challenge/ChallengeList"
import { ChallengeStateContext } from "../App"

const getFilteredDate = (pivotDate, data) => {
    const start = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const end = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime()
    return data.filter((item) => start <= item.startDate && item.startDate <= end)
}


const Challenge = () => {
    const data = useContext(ChallengeStateContext);

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
    return <div>
        <ChallengeList data={filtered} onIncreaseMonth={onIncreaseMonth}
            onDecreaseMonth={onDecreaseMonth} getMonth={getMonth} getYear={getYear} />
    </div>
}

export default Challenge