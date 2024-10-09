"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoMdMenu, IoMdClose, IoMdDownload } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import Image from 'next/image';
import Logo from "@/app/public/Logo.png"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='lg:container  mx-auto lg:flex lg:justify-between lg:items-center p-2 lg:border-solid lg:border-[1px] lg:border-black' >

            {/* =======Logo and ham berger toggle section========= */}
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={Logo} alt='logo Image' />
                </Link>

                <div className='lg:hidden block text-2xl' onClick={toggleMenu}>
                    {
                        isOpen ? <IoMdClose /> : <IoMdMenu />
                    }
                </div>
            </div>

            {/* =======Navigation Menu section========= */}
            <div className={`lg:block ${isOpen ? "block" : "hidden"}  `}>
                <ul className='lg:flex lg:justify-between lg:items-center gap-4'>
                    <li className='hover:text-orange-600 font-bold my-3'>
                        <Link className='' href="/about">About Me</Link>
                    </li>
                    <li className='hover:text-orange-600 font-bold my-3'>
                        <Link className='' href="/skills">Skills</Link>
                    </li>
                    <li className='hover:text-orange-600 font-bold my-3'>
                        <Link className='' href="/project">Project</Link>
                    </li>
                    <li className='hover:text-orange-600 font-bold my-3'>
                        <Link className='' href="/contact">Contact Me</Link>
                    </li>
                </ul>
                {
                    <div className='my-2 lg:hidden block' >
                        <a className=' text-white bg-black py-1 px-4' href="./resume.pdf" download={true}>Resume < IoMdDownload className='inline' /></a>
                    </div>
                }

            </div>

            {/* =======Resume Button section========= */}
            <div className='hidden lg:block'>
                <a className='flex justify-center items-center text-white bg-black py-1 px-4' href="./resume.pdf" download={true}>Resume < IoMdDownload /></a>
            </div>
        </nav >
    );
};

export default Navbar;
