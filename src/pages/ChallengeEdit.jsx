import { useNavigate, useParams } from "react-router"
import ChallengeMain from "../components/Challenge/ChallengeMain"
import { useContext } from "react"
import { ChallengeDispatchContext, ChallengeStateContext } from "../App"
const ChallengeEdit = () => {
    const params = useParams()
    const data = useContext(ChallengeStateContext)
    const nav = useNavigate()
    const { onChallengeUpdate, onChallengeDelete } = useContext(ChallengeDispatchContext)
    const filteredData = data.filter((item) => Number(item.id) === Number(params.id))

    const onUpdate = (input, index) => {
        const findData = filteredData.map((item) => ({
            ...item, daily: item.daily.map((dailyItem) => {
                const FindIndex = item.daily.indexOf(dailyItem)
                if (index === FindIndex) {
                    return { item: input.daily[index].item, ischecked: input.daily[index].ischecked }
                }
                else return dailyItem
            })
        }))
        findData.forEach((item) => {
            onChallengeUpdate(item.id, item.startDate, item.subject, item.state, item.daily);
        });
    }

    const onUpdateState = (input) => {
        if (input.daily[input.daily.length - 1].ischecked && input.state === false) {
            onChallengeUpdate(input.id, input.startDate, input.subject, true, input.daily)

        }
        if (!input.daily[input.daily.length - 1].ischecked && input.state === true) {
            onChallengeUpdate(input.id, input.startDate, input.subject, false, input.daily)
        }

    }

    const onUpdateChecked = (input, index) => {
        const updatedDaily = input.daily.map((dailyItem, dailyIndex) => {
            if (dailyIndex === index) {
                return { ...dailyItem, ischecked: !dailyItem.ischecked };
            }
            return dailyItem;
        });

        const updatedInput = { ...input, daily: updatedDaily };

        onChallengeUpdate(updatedInput.id, updatedInput.startDate, updatedInput.subject, updatedInput.state, updatedInput.daily);

    }

    const onDelete = (id) => {
        if (window.confirm('삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?')) {
            onChallengeDelete(id)
            nav('/challenge', { replace: true })
        }


    }

    return <div>
        <ChallengeMain data={filteredData} onUpdate={onUpdate} onUpdateChecked={onUpdateChecked}
            onUpdateState={onUpdateState} onDelete={onDelete} />
    </div>
}
export default ChallengeEdit