import { GoBell, GoChevronDown } from 'react-icons/go';

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="logo">
                    <img src="./assets/logo.png" alt="" />
                </div>
                <nav>
                    <a href='#'>FAQ</a>
                    <a href='#'>Feedback</a>
                    <div className='notification'>
                        <GoBell />
                        <div id='red-dot'></div>
                    </div>
                    <div className="avatar-text">
                        <span className="avatar">
                            <img src="./assets/avatar.png" alt="" />
                        </span>
                        <span>
                            <p>Harsh Kumar</p>
                            <GoChevronDown />
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header