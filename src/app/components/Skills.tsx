import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
function Skills() {
    return (
        <div className="lg:container mx-auto lg:w-full p-2 my-4 bg-black text-white " id="skills">
            <h2 className="text-3xl text-center my-4">My <span className="font-bold">Skills</span> </h2>
            <div className="flex flex-wrap justify-center gap-4 my-4	">
                <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <FaHtml5 className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">HTML</p>
                </div>
                <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <FaCss3Alt className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">CSS</p>
                </div>
                <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <IoLogoJavascript className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">JavaScript</p>
                </div>
                <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <SiTypescript className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">TypeScript</p>
                </div>
                <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <FaReact className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">React Js</p>
                </div>    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <SiNextdotjs className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">Next Js</p>
                </div>    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <SiTailwindcss className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">Tailwind Css</p>
                </div>    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <SiFirebase className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">Firebase</p>
                </div>    <div className="w-[100px] h-[100px] flex flex-col items-center justify-center border border-white rounded p-2">
                    <FaGithub className="w-10 h-10" />
                    <p className="text-center text-[12px] mt-2">Github</p>
                </div>
            </div>
        </div>
    )

}
export default Skills;