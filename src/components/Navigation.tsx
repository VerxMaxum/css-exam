import { useState } from 'react'
export const Navigation = () => {
    const [isShown, setIsShown] = useState(false);
    return (
        <>
            <nav className="nav-wrapper">
                <button className="menu-button" onClick={() => {
                    setIsShown(!isShown);
                }}>
                    <img src="./images/menu.svg" />
                </button>
                <ul className={`sidebar ${isShown ? "sm:absolute" : "sm:hidden"}`}>
                    <div className="sidebar-heading">
                        <h6 className="sidebar-title">Menu</h6>
                        <button className="sidebar-button" onClick={() => {
                        setIsShown(!isShown);
                        }}>
                            <img src="./images/close.svg" />
                        </button>
                    </div>
                    <li className="navigation-item side">
                        Home
                    </li>
                    <li className="navigation-item side">
                        About
                    </li>
                    <li className="navigation-item side">
                        Community
                    </li>
                    <li className="navigation-item side">
                        News & Events
                    </li>
                </ul>
                <div className="nav-logo-wrapper">
                    <img src="./images/logo.png" />
                </div>
                <ul className="navigations-wrapper">
                    <li className="navigation-item">
                        Home
                    </li>
                    <li className='navigation-item'>
                        About
                    </li>
                    <li className='navigation-item'>
                        Community
                    </li>
                    <li className='navigation-item'>
                        News & Events
                    </li>
                </ul>
            </nav>
        </>
    );
}