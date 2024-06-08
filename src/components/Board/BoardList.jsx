import './BoardList.css'
import MonthButton from '../MonthButton';
import HomeButton from '../HomeButton';
import BoardItem from './BoardItem';
import { useNavigate } from 'react-router';


const BoardList = ({ data, getMonth, getYear, onIncreaseMonth, onDecreaseMonth }) => {
    const nav = useNavigate()

    return <div className="BoardList">
        <div className='BoardListHeader'>
            <MonthButton text={"<"} onClick={onDecreaseMonth} />
            <h2> It&rsquo;s {getYear} {getMonth.charAt(0).toUpperCase() + getMonth.slice(1).toLowerCase()} Archiving
            </h2>
            <MonthButton
                text={">"} onClick={onIncreaseMonth} />
            <div className='HomeButton'>
                <HomeButton />
            </div>
        </div>

        <div className='subtitle'>
            <div className="menu_h3">
                <div className="h3">
                    <h4 >You have to cherish the Little Things<br /> {`That's the Support of Life - !`}</h4>
                </div>
                <div className="menu_h3_sub">
                    <p>Everyth!ng <br />Will be Alringt!</p>
                </div>
            </div>
            <button onClick={() => nav('/board/new')}>✏️ Click hear and Write a Story about Moment</button>
        </div>
        <div className='item_wrapper'>
            {data.map((item) => {
                return <BoardItem key={item.id} {...item} />
            })}
        </div>
    </div>

}

export default BoardList;