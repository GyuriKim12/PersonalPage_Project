import { useNavigate } from "react-router";
import Button from "../Button";
import ChallengeDaily from "./ChallengeDaily";
import './ChallengeMain.css'

function findLastCheckedIndex(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].ischecked) {
            return i;
        }
    }
    return -1;
}


const ChallengeMain = ({ data, onUpdate, onUpdateChecked, onUpdateState, onDelete }) => {
    const filtered = data[0]
    const findIndex = findLastCheckedIndex(filtered.daily) === -1 ? 0 : findLastCheckedIndex(filtered.daily) + 1
    const nav = useNavigate();

    return <div className='ChallengeWriting'>
        <div className='BoardHeader'>
            <Button text={"<"} nav={"challenge"} />
            <h2>Life is a Series of Experiences <br />{`Continue ⛅ 🌧️ ☁️ ( EveryDay )`}</h2>
        </div>

        <div className='ChallengeMain'>
            <div className="title_up">
                {`If the challenge before you is too big, then It's the perfect challenge for you`}
            </div>
            <div className="title_down">
                <div className="title_left">
                    <h1>{findIndex}/{filtered.daily.length}</h1>
                    <div>📈</div>
                </div>
                <div className="title_right">
                    <div className="title_right_sub">
                        <h1>Challenge!?</h1>
                        <div></div>
                    </div>
                    <div>
                        <div className="title_subject">
                            <p>{filtered.subject}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <section className='subject_seciton'>
            <h3>{`☐ Complete this Challenge untill the End!`}</h3>
            <ChallengeDaily filtered={filtered}
                onUpdate={onUpdate} onUpdateChecked={onUpdateChecked} onUpdateState={onUpdateState} />

        </section>
        {/* 
        <section className="challengeEdit">

        </section> */}


        <div className='challenge_edit'>
            <div className='editCheck'>
                <div>
                    If U
                </div>
                <button onClick={() => { nav(`/challenge/new/edit/${filtered.id}`) }}>Want to Edit ☑️( Click ) Hear!</button>
            </div>
            <div className="challenge_delete">
                <button onClick={() => onDelete(filtered.id)}>🗑️</button>
            </div>
        </div>
    </div>
}

export default ChallengeMain