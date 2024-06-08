import { useNavigate } from "react-router";
import Button from "../Button";
import './MainButton.css'

const MainButton = () => {
    const nav = useNavigate();
    return <div className="MainButton">
        <div className="MainButton_title">
            <h2>Click the Ⓕunction you want !</h2>
        </div>
        <div className="MainButton_button">
            <button onClick={() => nav('/todo')}>
                📅
            </button>
            <button onClick={() => nav('/diary')}>
                🕒
            </button>
            <button onClick={() => nav('/board')}>
                📷
            </button>
            <button onClick={() => nav('/challenge')}>
                💡
            </button>
        </div>
    </div>
}

export default MainButton;