import MonthButton from '../MonthButton';
import HomeButton from '../HomeButton';
import './../Diary/DiaryHeader.css'
const TodoHeader = ({ getYear, getMonth, onIncreaseMonth, onDecreaseMonth }) => {
    return <div className="DiaryHeader">
        <MonthButton text={"<"} type={'basic'} onClick={onDecreaseMonth} />
        <h2> {getYear} {getMonth.charAt(0).toUpperCase()}{getMonth.slice(1)} To - do List !
            <br />You can realize everything</h2>
        <MonthButton text={">"} type={'basic'} onClick={onIncreaseMonth} />
        <HomeButton />
    </div>

}

export default TodoHeader;