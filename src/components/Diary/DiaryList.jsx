import Button from "../Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useState } from "react";
import image from './../../assets/image3.jpg'
import { useNavigate } from "react-router";

const DiaryList = ({ data }) => {
    const nav = useNavigate()
    const [state, setState] = useState("latest");
    const onChangeState = (e) => {
        setState(e.target.value)
    }

    const SortedData = (data) => {
        return data.toSorted((a, b) => {
            if (state === "oldest") {
                return Number(a.createdDate) - Number(b.createdDate)
            }
            else {
                return Number(b.createdDate) - Number(a.createdDate)

            }
        })
    }

    const sortedDate = SortedData(data);

    return <div className="DiaryList">
        <div className="menu_h3">
            <div className="h3">
                <h4 >You have to cherish the Little Things<br /> {`That's the Support of Life - !`}</h4>
            </div>
            <div className="menu_h3_sub">
                <p>Everyth!ng <br />Will be Alringt!</p>
            </div>
        </div>
        <div className="menu_bar">
            <select onClick={onChangeState}>
                <option value={"latest"}>latest</option>
                <option value={"oldest"}>oldest</option>
            </select>
            <button onClick={() => nav('/diary/new')}>✏️ How are you Today? Click hear and Write about!</button>

        </div>

        <div>
            {sortedDate.map((item) => {
                if (item.content !== "") return <DiaryItem key={item.id} {...item} />
                else return null
            })}
        </div>

    </div>
}

export default DiaryList;