import './HomeButton.css'
import { useNavigate } from 'react-router'
import home from './../assets/home.png'


const HomeButton = () => {
    const nav = useNavigate();
    return <div className='img_section'>
        <button className='button' onClick={() => nav("/")}><img className='img' src={home} /></button>
    </div>
}

export default HomeButton