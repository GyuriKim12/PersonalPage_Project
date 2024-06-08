import { useContext } from "react"
import BoardWriting from "../components/Board/BoardWriting"
import { BoardDispatchContext } from "../App"
import { useNavigate } from "react-router"

const BoardNew = () => {
    const { onBoardCreate, onBoardUpdate, onBoardDelete } = useContext(BoardDispatchContext)
    const nav = useNavigate()
    const edit = false;

    const onCreate = (input) => {
        onBoardCreate(input.createdDate, input.title, input.content, input.img)
        nav(-1, { replace: true })
    }
    return <div><BoardWriting onCreate={onCreate} edit={edit} /></div>
}

export default BoardNew