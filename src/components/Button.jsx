import './Button.css'
import { useNavigate } from 'react-router'
const Button = ({ text, nav, type }) => {

    const navigate = useNavigate();
    const goNav = () => {
        navigate(`/${nav}`)
    }

    const buttonClassName = `Button Button_${type}`;

    return <button className={buttonClassName} onClick={goNav}>{text}</button>

}

export default Button;