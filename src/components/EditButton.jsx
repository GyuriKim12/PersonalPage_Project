import './EditButton.css'
import { useNavigate } from 'react-router'
const EditButton = ({ text, nav, type, blank }) => {

    const navigate = useNavigate();
    const goNav = () => {
        if (blank === true) {
            navigate(`/${nav}`)
        }
        else {
            if (window.confirm('수정 내용이 저장 안됩니다'))
                navigate(`/${nav}`)
        }

    }

    const buttonClassName = `Button Button_${type}`;

    return <button className={buttonClassName} onClick={goNav}>{text}</button>

}

export default EditButton;