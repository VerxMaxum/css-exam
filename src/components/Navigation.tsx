import { useState } from 'react'
import { NavLink } from 'react-router-dom'

type NavLinkStyleProp = {
    isActive: boolean
}

export const Navigation = () => {
    const [isShown, setIsShown] = useState(false);

    const navLinkStyles = ({ isActive }: NavLinkStyleProp) => {
        return {
            textDecoration: isActive ? "underline" : "none"
        }
    }

    return (
        <>
            <nav className="nav-wrapper">
                <button className="menu-button" onClick={() => {
                    setIsShown(!isShown);
                }}>
                    <img src="./images/menu.svg" />
                </button>
                <div className={`sidebar ${isShown ? "max-lg:fixed" : "max-lg:hidden"}`}>
                    <div className="sidebar-heading">
                        <h6 className="sidebar-title">Menu</h6>
                        <button className="sidebar-button" onClick={() => {
                        setIsShown(!isShown);
                        }}>
                            <img src="./images/close.svg" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="navigation-item side">
                            <NavLink to="/" style={navLinkStyles}>Home</NavLink>
                        </div>
                        <div className="navigation-item side">
                            <NavLink to="/About" style={navLinkStyles}>About</NavLink>
                        </div>
                        <div className="navigation-item side">
                            <NavLink to="/Community" style={navLinkStyles}>Community</NavLink>
                        </div>
                        <div className="navigation-item side">
                            <NavLink to="/news-and-events" style={navLinkStyles}>News & Events</NavLink>
                        </div>
                    </div>
                </div>
                <div className="nav-logo-wrapper">
                    <img src="./images/logo.png" />
                </div>
                <div className="navigations-wrapper">
                    <div className="navigation-item">
                        <NavLink to="/" style={navLinkStyles}>Home</NavLink>
                    </div>
                    <div className='navigation-item'>
                        <NavLink to="/About" style={navLinkStyles}>About</NavLink>
                    </div>
                    <div className='navigation-item'>
                        <NavLink to="/Community" style={navLinkStyles}>Community</NavLink>
                    </div>
                    <div className='navigation-item'>
                        <NavLink to="/news-and-events" style={navLinkStyles}>News & Events</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}