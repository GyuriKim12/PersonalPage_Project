import { useNavigate } from 'react-router'
import './BoardItem.css'

const BoardItem = ({ id, createdDate, title, content, img }) => {
    const nav = useNavigate()
    return <div className='BoardItem' onClick={() => nav(`/board/edit/${id}`)}>
        <div className='img_section'>
            <img src={img} />
        </div>
        <div className='content_section'>
            <div className='title'>{title}</div>
        </div>
    </div>
}

export default BoardItem