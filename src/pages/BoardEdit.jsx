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
        onBoardUpdate(params.id, input.createdDate, input.title, input.content, input.img)
        nav(-1, { replace: true })
    }

    const onDelete = () => {
        onBoardDelete(params.id)
        nav(-1, { replace: true })
    }

    return <div><BoardWriting edit={edit} initData={initData} onUpdate={onUpdate} onDelete={onDelete} /></div>
}

export default BoardEdit;