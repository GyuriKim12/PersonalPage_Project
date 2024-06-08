import './DiaryItem.css'
import { getEmotionImage } from '../../utils/get-emotion';
import Button from "../Button";
import { useNavigate } from 'react-router';

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
    const nav = useNavigate();
    return <div className='DiaryItem' onClick={() => nav(`/diary/edit/${id}`)}>
        <div className='emotion'>
            <img src={getEmotionImage(emotionId)} />
        </div>
        <div className='info_section'>
            <div className='date'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='content'>{content}</div>
        </div>
    </div>
}

export default DiaryItem;