import React from 'react'
import logo from '../assets/Image/newlogo.png'
import { MdFacebook } from 'react-icons/md'
import { FaInstagramSquare } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

const ThemeNavbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-2 px-6">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">
                        <a href="#" className="text-blue-600">
                            <img src={logo} className=' h-[60px] md:text-left text-center' alt='image'/>
                        </a>
                    </div>
                    <div className="flex md:gap-4 gap-2 items-center">
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <MdFacebook className="md:text-[32px] text-[25px]" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-green-500">
                            <IoLogoWhatsapp className="md:text-[30px] text-[25px]" />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-pink-600">
                            <FaInstagramSquare  className="md:text-[26px] text-[22px]" />
                        </a>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ThemeNavbar
