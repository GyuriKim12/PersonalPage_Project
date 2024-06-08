import './BoardWriting.css'
import EditButton from '../EditButton'
import image from './../../assets/image2.jpg'
import { useEffect, useRef, useState } from 'react'

const BoardWriting = ({ onCreate, edit, initData, onUpdate, onDelete }) => {
    const isRef = useRef();
    const [input, setInput] = useState({
        createdDate: new Date().getTime(),
        title: "",
        content: "",
        img: "",
    });
    const [img, setImage] = useState(false);
    const [chamge, setChange] = useState(false);

    const blank = () => {
        if (!chamge) return true;
        return false;
    }

    const blankCheck = blank()

    useEffect(() => {
        if (input.img !== "") {
            setImage(true)
        }
        else setImage(false)
    }, [input])

    const onChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({
            ...input, [name]: value,
        })
        setChange(true);
    }

    useEffect(() => {
        if (initData) {
            setInput({
                createdDate: initData.createdDate,
                title: initData.title,
                content: initData.content,
                img: initData.img,
            })
        }
    }, [initData])

    const saveImgFile = () => {
        const file = isRef.current.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setInput({ ...input, img: reader.result });
            };
            setImage(true);
        }
    };

    const onSave = () => {
        if (!input.img) {
            window.alert('아직 이미지가 올라가지 않았습니다')
            return
        }
        if (initData) {
            onUpdate(input)
        }
        else {
            onCreate(input)
        }


    }

    const onDeleteItem = () => {
        onDelete()
    }


    return <div className='BoardWriting'>
        <div className='BoardHeader'>
            <EditButton text={"<"} nav={"Board"} blank={blankCheck} />
            <h2>Archive Your Best Memory <br />with this empty page</h2>
            <img src={image} />
        </div>

        <section className='img_section'>
            <div className='img_title'>
                <div className='img_main_title'>
                    <div><h3>{`It's`} </h3></div>
                    <div className='new'><h2>NEW</h2></div>
                    <div><h3>{`( Moment! )`}</h3></div>
                </div>
                <div className='img_sub_title'>
                    <h4>📼 📷 🎞️ 📹</h4>
                </div>
            </div>
            <div className='memorization'>Memorization</div>
            <form>
                <label className='input_image' htmlFor='input_file'>🔎 Click hear and Select your Best Moment!</label>
                <input
                    type='file' accept="image/*" ref={isRef} name='img'
                    id='input_file'
                    onChange={saveImgFile} style={{ display: "none" }} />
            </form>
            <div className={`img_div img_${img}`}>
                <img src={input.img} />
            </div>

        </section>

        <section className='title_section'>
            <h3>{`☐ What's the title of the Moment?`}</h3>
            <input
                name='title'
                value={input.title}
                onChange={onChange}
                placeholder="title is ..." />
        </section>

        <section className='content_section'>
            <h3>☐ Writing about the Moment</h3>
            <textarea
                name='content'
                value={input.content}
                onChange={onChange}
                placeholder={`Don’t wanna Waste All these 🦕 Meanings`} />
        </section>

        <section className='button_section'>
            <button className={`delete_${edit}`} onClick={onDeleteItem}>🗑️</button>
            <button onClick={onSave}>📁</button>
        </section>
    </div>
}

export default BoardWriting