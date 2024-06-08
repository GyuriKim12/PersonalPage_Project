import './Button.css'
const MonthButton = ({ text, type, onClick }) => {

    const buttonClassName = `Button Button_${type}`;

    return <button className={buttonClassName} onClick={onClick}>{text}</button>

}

export default MonthButton;