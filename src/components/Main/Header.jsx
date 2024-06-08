import './Header.css'
const Header = () => {

    return <div className="Header">

        <div className='Header_sub'>
            <h2>What are the Ⓕunctions?</h2>

            <div className='header_div_sub'>
                <section>
                    <div><h2>📅</h2></div>
                    <h3>Manage To-Do</h3>
                </section>
                <section>
                    <div><h2>🕒</h2></div>
                    <h3>Write about Daily</h3>
                </section>
                <section>
                    <div><h2>📷</h2></div>
                    <h3>Memorize Moment</h3>
                </section>
                <section>
                    <div><h2>💡</h2></div>
                    <h3>Set a Goal and Practice</h3>
                </section>
            </div>

        </div>
        <div className='Header_title'>
            <p>When are u ( 🦕 ) <br />Growing and <br />Realizing ( Dreams ) ?</p>
            <h1>⛅ 🌧️ ☁️ Every Day !</h1>
        </div>

    </div>
}

export default Header;