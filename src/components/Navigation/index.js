import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navigation = () => {
    const isOpen = useSelector((state) => state.isMenuOpen.value)
    return (
        <nav className={isOpen ? 'navbar active' : 'navbar flex'}>
            <ul id="navigation" data-visible="false" className='navigation flex'>
                <li>
                    <NavLink
                    className="isActive"
                    to="/">
                        Collections
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className=""
                    to="/men">
                        Men
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className=""
                    to="/women">
                        Women
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className=""
                    to="/about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className=""
                    to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;