import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" }
];
const Navbar = () => {
    const location = useLocation()
    return (
        <header className="text-gray-600  px-10 md:px-32  ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  ">
                    <img src="/icon.png" alt="header-icon" className='w-10 h-10 object-cover' />
                    <span className="ml-3 text-xl">Box Office</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <ul className='flex'>
                        {
                            NAV_LINKS.map(link => (
                                <li
                                    className={`mr-5 hover:text-indigo-500 font-semibold ${location.pathname === link.to && "underline underline-offset-8 decoration-2 text-indigo-500  drop-shadow-md "}`}
                                    key={link.to}
                                >
                                    <Link to={link.to}>{link.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default memo(Navbar)