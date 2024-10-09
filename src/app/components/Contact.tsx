import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
export default function Contact() {
    return (
        <div className="lg:container mx-auto lg:w-full p-2 my-8 lg:flex justify-between items-center ">
            <div className="lg:w-1/2 w-full">
                <div className="w-full lg:w-[90%] mx-auto flex flex-col space-y-4">
                    <input className="w-full  border border-black px-4 py-2" type="text" placeholder="Name" />
                    <input className="w-full  border border-black px-4 py-2" type="email" placeholder="Email" />
                    <input className="w-full  border border-black px-4 py-2" type="text" placeholder="Subject" />
                    <textarea className="w-full  border border-black px-4 py-2" name="" cols={30} rows={5} placeholder="Message" id=""></textarea>
                </div>
                <div className="w-full lg:w-[90%] mx-auto flex space-x-4 my-4"><button className="bg-black text-white text-sm px-4 py-2">Get in Touch</button>
                    <Link className=" border border-black rounded w-[30px] h-[30px] flex justify-center items-center" href="https://linkedin.com">
                        <FaGithub />
                    </Link>
                    <Link className="border border-black rounded w-[30px] h-[30px] flex justify-center items-center" href="https://linkedin.com">
                        <FaLinkedinIn />
                    </Link>
                    <Link className="border border-black rounded w-[30px] h-[30px] flex justify-center items-center" href="https://linkedin.com">
                        <FaFacebookF />
                    </Link>
                    <Link className="border border-black rounded w-[30px] h-[30px] flex justify-center items-center" href="https://linkedin.com">
                        <FaTwitter />
                    </Link>
                    <Link className="border border-black rounded w-[30px] h-[30px] flex justify-center items-center" href="https://linkedin.com">
                        <IoLogoWhatsapp />
                    </Link>
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:py-0 py-4">
                <h2 className="lg:w-3/4 lg:text-4xl text-3xl lg:leading-[3rem] leading-10 font-bold ">
                    Let's
                    <span className=" font-extrabold my-text-stroke"> talk </span>for<br />
                    Something special
                </h2>
                <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <p className="font-bold mt-2">imarifluqman@gmail.com</p>
                <p className="font-bold mt-2">+92-323-2523477</p>
            </div>
        </div>)
};