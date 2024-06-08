import { useContext } from "react";
import DiaryWriting from '../components/Diary/DiaryWriting';
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router";

const DiaryNew = () => {
    const data = useContext(DiaryStateContext)
    const { onCreate, onUpdate, isRef } = useContext(DiaryDispatchContext)
    const edit = false
    const nav = useNavigate();
    const onSubmitDiary = (input) => {
        const exist = data.some((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString()
        })

        const item = data.find((item) => {
            return new Date(item.createdDate).toLocaleDateString() === new Date(input.createdDate).toLocaleDateString();
        });

        const todo = item ? item.todo : [];
        const content = item ? input.content : "";
        const emotionId = item ? input.emotionId : 2;
        const id = item ? item.id : isRef.current;

        if (exist == true && item.content === "") {
            onUpdate(id, input.createdDate.getTime(), emotionId, content, todo)
            nav('/diary', { replace: true })
        }
        else if (exist == true) {
            if (window.confirm("일기를 정말 수정할까요?")) {
                onUpdate(id, input.createdDate.getTime(), emotionId, content, todo)
                nav('/diary', { replace: true })
            }
        }
        else {
            onCreate(input.createdDate.getTime(), input.emotionId, input.content, todo)
            nav('/diary', { replace: true })
        }
    }

    return <div>
        <DiaryWriting onSubmitDiary={onSubmitDiary} edit={edit} />
    </div>
}

export default DiaryNew