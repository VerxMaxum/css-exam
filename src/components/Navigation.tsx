export const Navigation = () => {
    return (
        <nav className="nav-wrapper">
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
    );
}