import Image from "next/image";
import img from "@/app/public/Banner.png";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
// components/Hero.js
const HeroSection = () => {
    return (
        <section className="lg:container mx-auto lg:w-full lg:h-screen flex flex-col-reverse lg:flex lg:flex-row lg:justify-between lg:items-center">
            <div className="lg:w-1/2 w-full lg:h-screen lg:flex lg:justify-center lg:items-center  p-2">
                <div className="lg:w-[90%]">
                    <h1 className="lg:w-3/4 lg:text-4xl text-3xl lg:leading-[4rem] leading-10 font-light ">
                        Hello I am
                        <span className="font-bold"> Arif Luqman. </span>
                        <span className="font-bold">Frontend</span>
                        <span className=" font-extrabold my-text-stroke">Developer</span><br />
                        Based in
                        <span className="font-bold">Pakistan</span>
                    </h1>
                    <p className="text-[12px]">I&apos;m Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <div className="flex space-x-4 my-4">
                        <Link className=" border border-black rounded p-2" href="https://linkedin.com">
                            <FaGithub />
                        </Link>
                        <Link className="border border-black rounded p-2" href="https://linkedin.com">
                            <FaLinkedinIn />
                        </Link>
                        <Link className="border border-black rounded p-2" href="https://linkedin.com">
                            <FaFacebookF />
                        </Link>
                        <Link className="border border-black rounded p-2" href="https://linkedin.com">
                            <FaTwitter />
                        </Link>
                        <Link className="border border-black rounded p-2" href="https://linkedin.com">
                            <IoLogoWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-screen p-2 my flex justify-center items-center">
                <Image className=" " src={img} alt="image" width={400} />
            </div>

        </section>
    );
};

export default HeroSection;
