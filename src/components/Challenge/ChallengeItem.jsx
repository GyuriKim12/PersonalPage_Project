import { useNavigate } from 'react-router'
import './ChallengeItem.css'
const ChallengeItem = ({ id, startDate, subject, state, daily }) => {
    const nav = useNavigate();
    return <div className='ChallengeItem' onClick={() => nav(`/challenge/edit/${id}`)}>
        <div className='imogi'>💡</div>
        <div className='item_subject'>
            <div>
                {subject}
            </div>
            <div className='startDate'>
                start day : {new Date(startDate).toLocaleDateString()}
            </div>
        </div>
        <div className={state ? 'state done' : 'state progress'}>
            <div>{state ? `Done` : 'In Process'}</div>
        </div>
    </div>
}

export default ChallengeItem