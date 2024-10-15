import Image from "next/image";
import img from "../public/binyamin.jpg";
import img2 from "../public/binyamin2.jpg";

import { FaGithub, FaEye } from 'react-icons/fa';
import Link from "next/link";
function Projects() {


    return (
        <section className="bg-black text-white p-2">
            <h2 className="text-3xl text-center my-4">My <span className="font-bold">Projects</span> </h2>
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-around lg:items-center my-6">

                <div className="w-[330px] h-[250px] my-2">
                    <Image className="w-full h-full rounded" src={img} width={330} height={250} alt="image" />
                </div>

                <div className="w-[330px] flex flex-col gap-4">
                    <p className="text-3xl">01</p>
                    <p className="text-2xl">Landing page website</p>
                    <p className="text-[12px]">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <div className="flex space-x-4 mt-2">
                        <Link className="flex items-center gap-1 px-2 py-1 text-[12px] bg-black text-white border hover:bg-white hover:text-black" href="https://github.com/evrenshah"><FaGithub />Github</Link>
                        <Link className="flex items-center gap-1 px-2 py-1 text-[12px] bg-black text-white border hover:bg-white hover:text-black" href="https://github.com/evrenshah"><FaEye />Demo</Link>
                    </div>
                </div>
            </div>
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-around lg:items-center my-6">
                <div className="w-[330px] flex flex-col gap-4">
                    <p className="text-3xl">02</p>
                    <p className="text-2xl">Landing page website</p>
                    <p className="text-[12px]">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                    <div className="flex space-x-4 mt-2">
                        <Link className="flex items-center gap-1 px-2 py-1 text-[12px] bg-black text-white border hover:bg-white hover:text-black" href="https://github.com/evrenshah"><FaGithub />Github</Link>
                        <Link className="flex items-center gap-1 px-2 py-1 text-[12px] bg-black text-white border hover:bg-white hover:text-black" href="https://github.com/evrenshah"><FaEye />Demo</Link>
                    </div>
                </div>
                <div className="w-[330px] h-[250px]">
                    <Image className="w-full h-full rounded" src={img2} width={330} height={250} alt="image" />
                </div>
            </div>
        </section>
    )
}

export default Projects;