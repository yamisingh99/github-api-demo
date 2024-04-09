import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-11 lg:px-10 py-2">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg"
                            className="mr-3 h-20 w-20"
                            alt="Logo"
                        />
                    </Link><p>
                    God gives life but only doctors can save it ♥
                    </p>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="block text-gray-700 hover:text-orange-700 focus:outline-none"
                        >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    d="M3 5h18v1H3V5zm0 6h18v1H3v-1zm0 6h18v1H3v-1z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1 transition-all duration-300 ease-in-out`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    className="block py-2 px-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                    onClick={closeMenu} // Close menu on click
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="block py-2 px-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                    onClick={closeMenu} // Close menu on click
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 px-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                    onClick={closeMenu} // Close menu on click
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/reviews"
                                    className="block py-2 px-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                    onClick={closeMenu} // Close menu on click
                                >
                                    Reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/creator"
                                    className="block py-2 px-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                                    activeClassName="text-orange-700"
                                    onClick={closeMenu} // Close menu on click
                                >
                                    Developer
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
