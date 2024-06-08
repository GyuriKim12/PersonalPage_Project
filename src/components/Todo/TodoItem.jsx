import './TodoItem.css'
import { useNavigate } from 'react-router';

const TodoItem = ({ id, createdDate, emotionId, content }) => {
    const nav = useNavigate();
    return <div className='TodoItem'>
        <h1>🍀</h1>
        <button className='date' onClick={() => {
            nav(`/todo/edit/${id}`)
        }}>{new Date(createdDate).toLocaleDateString()}</button>
    </div>
}

export default TodoItem;