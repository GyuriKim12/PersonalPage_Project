import { useNavigate, useParams } from "react-router";
import BoardWriting from "../components/Board/BoardWriting"
import { useContext } from "react";
import { BoardDispatchContext, BoardStateContext } from "../App";

const BoardEdit = () => {
    const params = useParams();
    const nav = useNavigate()
    const data = useContext(BoardStateContext)
    const edit = true
    const { onBoardUpdate, onBoardDelete } = useContext(BoardDispatchContext)
    const initData = data.find((item) => String(item.id) === String(params.id))

    const onUpdate = (input) => {
        if (window.confirm("글을 수정하시겠습니까?")) {
            onBoardUpdate(params.id, input.createdDate, input.title, input.content, input.img)
            nav('/board', { replace: true })
        }

    }

    const onDelete = () => {
        if (window.confirm('삭제하면 복구되지 않습니다. 정말 삭제하시겠습니까?')) {
            onBoardDelete(params.id)
            nav('/board', { replace: true })
        }

    }

    return <div><BoardWriting edit={edit} initData={initData} onUpdate={onUpdate} onDelete={onDelete} /></div>
}

export default BoardEdit;