export const Navigation = () => {
    return (
        <nav className="flex">
            <div className="w-1/2 flex items-center ml-7">
                <img src="./images/logo.png" />
            </div>
            <ul className="w-1/2 flex p-10 justify-evenly">
                <li className='text-primary font-nunito font-bold text-center text-lg p-4 cursor-pointer
                hover:bg-primary hover:text-white hover:transition-all'>
                    Home
                </li>
                <li className='text-primary font-nunito font-bold text-center text-lg p-4 cursor-pointer
                hover:bg-primary hover:text-white hover:transition-all'>
                    About
                </li>
                <li className='text-primary font-nunito font-bold text-center text-lg p-4 cursor-pointer
                hover:bg-primary hover:text-white hover:transition-all'>
                    Community
                </li>
                <li className='text-primary font-nunito font-bold text-center text-lg p-4 cursor-pointer
                hover:bg-primary hover:text-white hover:transition-all'>
                    News & Events
                </li>
            </ul>
        </nav>
    );
}