import MonthButton from '../MonthButton';
import HomeButton from '../HomeButton';
import { useNavigate } from 'react-router';
import ChallengeItem from './ChallengeItem';
import './ChallengeList.css'
import { useState } from 'react';


const ChallengeList = ({ data, getMonth, getYear, onIncreaseMonth, onDecreaseMonth }) => {
    const nav = useNavigate()
    const [state, setState] = useState('total')

    const onChange = (e) => {
        setState(e.target.value)
    }
    const getFiltered = () => {
        if (state === 'total') {
            return data
        }
        else if (state === 'InProgress') {
            return data.filter((item) => item.state === false)

        }
        else {
            return data.filter((item) => item.state === true)
        }
    }

    const filtered = getFiltered(data)

    return <div className="BoardList">
        <div className='BoardListHeader'>
            <MonthButton text={"<"} onClick={onDecreaseMonth} />
            <h2>Start to {getYear} {getMonth.charAt(0).toUpperCase() + getMonth.slice(1).toLowerCase()}
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
                    <h4 >It is not the mountain we conquer,<br /> but ourselves - !</h4>
                </div>
                <div className="menu_h3_sub">
                    <p>Everyth!ng <br />Will be Alringt!</p>
                </div>
            </div>
            <div className="board_menu_bar">
                <select onChange={onChange}>
                    <option value={"total"}>Total</option>
                    <option value={"InProgress"}>In Progress</option>
                    <option value={"done"}>Done</option>
                </select>
                <button onClick={() => nav('/challenge/new')}>✏️Click Hear and Realize your perfect Day</button>
            </div>
        </div>


        <div className='item_wrapper' >
            {filtered.map((item) => {
                return <ChallengeItem key={item.id} {...item} />
            })}
        </div>
    </div>

}

export default ChallengeList;