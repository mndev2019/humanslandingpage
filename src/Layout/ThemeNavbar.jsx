import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import search from '../assets/Image/search.svg'
import cart from '../assets/Image/cart.svg'
const ThemeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const location = useLocation();




    useEffect(() => {
        // Scroll to the bottom when the page changes
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    }, [location]);




    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-[600] text-[16px] items-center">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "textpurple" : "hover:textpurple"}
                >
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink
                    to=""
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:textpurple"}
                >
                    ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink
                    to=""
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:textpurple"}
                >
                    PRODUCTS
                </NavLink>
            </li>
            <li>
                <NavLink
                    to=""
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:textpurple"}
                >
                    BLOGS
                </NavLink>
            </li>
            <li>
                <NavLink
                    to=""
                    className={({ isActive }) => isActive ? "text-secondary" : "hover:textpurple"}
                >
                    FAQ’S
                </NavLink>
            </li>
        </ul>
    );


    return (
        <>
            <section className='py-2 '>
                <div className="xl:px-[5rem] md:px-[2rem] px-[1rem] ">
                    <div className="flex justify-between items-center">
                        {/* Sidebar icon for mobile */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <MenuOutlined className="md:text-3xl text-2xl" />
                            </button>
                        </div>
                        {/* Logo */}
                        <NavLink to='/'>
                            <img src={logo} alt='Logo' className='sm:h-[80px] h-[40px]' />
                        </NavLink>

                        {/* Navbar links for larger screens */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navlist}
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={search} alt='search' className='h-[25px] lg:block hidden' />
                            <img src={cart} alt='cart' className='h-[25px] lg:block hidden' />
                            <button className='bgpurple montserrat rounded-[50px] py-2 sm:px-10 px-5 text-[#FAEBEB] sm:text-[14px] text-[8px] font-[600]'>
                                LOG IN
                            </button>
                            <button className='border border-[#502E7B] montserrat rounded-[50px] py-2 sm:px-10 px-5 textpurple sm:text-[14px] text-[8px] font-[600]'>
                                SIGN UP
                            </button>
                        </div>




                    </div>
                </div>

                {/* Sidebar menu for mobile */}
                <div
                    className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 lg:hidden`}
                    style={{ width: '50%' }}
                >

                    <div className="p-6">
                        {/* Close button inside the sidebar */}
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <CloseOutlined className="text-2xl" />
                            </button>
                        </div>
                        {navlist}
                    </div>
                </div>
            </section >
        </>
    );
};

export default ThemeNavbar;