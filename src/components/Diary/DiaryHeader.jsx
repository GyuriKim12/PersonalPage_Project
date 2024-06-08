import './DiaryHeader.css'
import { useContext, useState } from "react";
import { DiaryStateContext } from "../../App";
import MonthButton from '../MonthButton';
import HomeButton from '../HomeButton';



const DiaryHeader = ({ getMonth, getYear, onIncreaseMonth, onDecreaseMonth }) => {
    return <div className="DiaryHeader">
        <MonthButton text={"<"} onClick={onDecreaseMonth} />
        <h2> It&rsquo;s {getYear} {getMonth.charAt(0).toUpperCase() + getMonth.slice(1).toLowerCase()} 🦕 !
            <br />What&rsquo;s your Feeling ?</h2>
        <MonthButton
            text={">"} onClick={onIncreaseMonth} />
        <div className='HomeButton'>
            <HomeButton />
        </div>
    </div>

}

export default DiaryHeader;