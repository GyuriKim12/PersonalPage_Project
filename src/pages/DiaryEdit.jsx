import { useParams, useNavigate } from "react-router"
import DiaryWriting from "../components/Diary/DiaryWriting";
import { useState, useContext, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const DiaryEdit = () => {
    const params = useParams();
    const data = useContext(DiaryStateContext)
    const { onUpdate, isRef } = useContext(DiaryDispatchContext)
    const [state, setState] = useState()
    const nav = useNavigate();
    const edit = true


    useEffect(() => {
        const currentItem = data.find((item) => String(item.id) === String(params.id))

        if (!currentItem) {
            window.alert("존재하지 않는 창 입니다")
            nav('/diary', { replace: true })
        }
        setState(currentItem)

    }, [data, nav, params.id])

    const onSubmitDiary = (input) => {
        const item = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        const todo = item ? item.todo : [];
        const content = item ? input.content : "";
        const emotionId = item ? input.emotionId : 2;
        if (window.confirm("일기를 수정하시겠습니까?")) {
            onUpdate(params.id, input.createdDate.getTime(), emotionId, content, todo)
            nav('/diary', { replace: true })
        }

    }

    const onDeleteDiary = (input) => {
        const findData = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        if (findData) {
            findData.content = ""
        }
        if (window.confirm("삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?")) {
            onUpdate(findData.id, findData.createdDate, findData.emotionId, findData.content, findData.todo);

            nav('/diary', { replace: true })

        }
    }
    return <div>
        <DiaryWriting onSubmitDiary={onSubmitDiary} edit={edit} initData={state} onDeleteDiary={onDeleteDiary} />
    </div>
}

export default DiaryEdit