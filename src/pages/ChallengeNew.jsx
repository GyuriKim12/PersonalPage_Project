import { useContext, useEffect, useState } from "react"
import ChallengeWriting from "../components/Challenge/ChallengeWriting"
import { ChallengeDispatchContext, ChallengeStateContext } from "../App"
import { useNavigate, useParams } from "react-router"

const ChallengeNew = () => {
    const { onChallengeCreate, onChallengeUpdate } = useContext(ChallengeDispatchContext)
    const data = useContext(ChallengeStateContext)
    const params = useParams();
    const nav = useNavigate()

    const [state, setState] = useState()

    useEffect(() => {
        if (params.id) {
            const currentItem = data.find((item) => String(item.id) === String(params.id));
            if (!currentItem) {
                window.alert("존재하지 않는 창 입니다");
                nav('/challenge', { replace: true });
            }
            setState(currentItem);
        } else {
            setState(null);
        }
    }, [data, nav, params.id]);

    return <div>
        <ChallengeWriting onCreate={onChallengeCreate} onUpdate={onChallengeUpdate} initData={state} />
    </div>
}

export default ChallengeNew