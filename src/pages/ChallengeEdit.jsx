import { useNavigate, useParams } from "react-router"
import ChallengeMain from "../components/Challenge/ChallengeMain"
import { useContext, useEffect, useState } from "react"
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
        onChallengeUpdate(input.id, input.startDate, input.subject, input.state, input.daily)
    }

    const onUpdateChecked = (index) => {
        const findData = data.map((item) => ({
            ...item, daily: item.daily.map((dailyItem) => {
                const findIndex = item.daily.indexOf(dailyItem);
                if (findIndex === index) {
                    return { ...dailyItem, ischecked: !dailyItem.ischecked };
                }
                else return dailyItem
            })
        }))

        findData.forEach((item) => {
            onChallengeUpdate(item.id, item.startDate, item.subject, item.state, item.daily);
        });

    }

    const onDelete = (id) => {
        if (window.confirm('삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?')) {
            onChallengeDelete(id)
            nav('/challenge')
        }


    }

    return <div>
        <ChallengeMain data={filteredData} onUpdate={onUpdate} onUpdateChecked={onUpdateChecked}
            onUpdateState={onUpdateState} onDelete={onDelete} />
    </div>
}
export default ChallengeEdit