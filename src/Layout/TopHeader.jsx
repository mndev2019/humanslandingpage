import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const TopHeader = () => {
    return (
        <div className="bg-[#502E7B] text-white text-sm py-4 xl:px-[5rem] md:px-[2rem] px-[1rem] flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Contact Info */}
            <div className="flex items-center md:gap-6 gap-1 flex-wrap justify-center md:justify-start">
                <div className="flex items-center gap-2 montserrat text-[#FAEBEB] text-[14px] font-[400]">
                    <FaEnvelope className="text-[#FAEBEB] text-[16px]" />
                    <span>soulpets@humansofanimalland.com</span>
                </div>
                <div className="flex items-center gap-2 montserrat text-[#FAEBEB] text-[14px] font-[400]">
                    <FaPhoneAlt className="text-[#FAEBEB]" />
                    <span>+91-9999999999</span>
                </div>
            </div>

            {/* Right Side: Social Icons */}
            <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="uppercase tracking-wide montserrat text-[#FAEBEB] text-[14px] font-[400]">Follow Us</span>
                <FaFacebookF className="cursor-pointer hover:text-[#B57EC1] transition text-[16px]" />
                <PiInstagramLogoFill className="cursor-pointer hover:text-[#B57EC1] transition text-[18px]" />
                <FaTwitter className="cursor-pointer hover:text-[#B57EC1] transition text-[18px]" />
                <FaYoutube className="cursor-pointer hover:text-[#B57EC1] transition text-[18px]" />
            </div>
        </div>
    );
};

export default TopHeader;
