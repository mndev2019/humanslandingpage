import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className="bg-[#502E7B] text-white text-sm py-4 xl:px-[5rem] md:px-[2rem] px-[1rem] flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Contact Info */}
            <div className="flex items-center md:gap-6 gap-1 flex-wrap justify-center md:justify-start">
                <div className="flex items-center gap-2 montserrat text-[#FAEBEB] text-[14px] font-[400]">
                    <FaEnvelope className="text-[#FAEBEB] text-[16px]" />
                    <a
                        href="mailto:soulpets@humansofanimalland.com"
                        className="text-[#FAEBEB] montserrat"
                    >
                        soulpets@humansofanimalland.com
                    </a>
                </div>
                <div className="flex items-center gap-2 montserrat text-[#FAEBEB] text-[14px] font-[400]">
                    <FaPhoneAlt className="text-[#FAEBEB]" />
                    <a
                        href="tel:+918527044887"
                        className="text-[#FAEBEB] "
                    >
                        +91-8527044887
                    </a>
                </div>
            </div>

            {/* Right Side: Social Icons */}
            <div className="flex items-center gap-4 mt-2 md:mt-0">
                <span className="uppercase tracking-wide montserrat text-[#FAEBEB] text-[14px] font-[400]">Follow Us</span>
                <a href='https://www.facebook.com/humansofanimalland/' target='_blank'>
                    <FaFacebookF className="cursor-pointer  transition text-[16px]" />
                </a>
                <a href='https://www.instagram.com/humansofanimalland/' target='_blank'>
                    <PiInstagramLogoFill className="cursor-pointer  transition text-[18px]" />
                </a>

                {/* <FaTwitter className="cursor-pointer  transition text-[18px]" /> */}
                <a href='https://www.youtube.com/channel/UCuvEN1paHkBIXdJ4mSgC9Nw' target='_blank'> <FaYoutube className="cursor-pointer  transition text-[18px]" /></a>

            </div>
        </div>
    );
};

export default TopHeader;
