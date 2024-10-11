import Image from "next/image";
import Banner from "@/app/public/about.png";

export default function About() {
    return (
        <section className="lg:container mx-auto lg:flex lg:justify-between lg:items-center p-2">
            <div className="lg:w-1/2 w-full flex">
                <Image src={Banner} alt="about image" width={300} height={300} />
            </div>
            <div className="lg:w-1/2 w-full ">
                <h2 className="text-3xl mt-10 mb-4 lg:mt-0">About <span className="font-bold">Me</span> </h2>
                <p>I{"&apos;"}m a passionate{"&lsquo;"} self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience{"&lsquo;"} pixel perfect design{"&lsquo;"} and writing clear{"&lsquo;"} readable{"&lsquo;"} highly performant code matters to me.
                    I began my journey as a web developer in 2022{"&lsquo;"} and since then{"&lsquo;"} I{"&apos;"}ve continued to grow and evolve as a developer{"&lsquo;"} taking on new challenges and learning the latest technologies along the way. Now{"&lsquo;"} in my early thirties{"&lsquo;"} 2 years after starting my web development journey{"&lsquo;"} I{"&apos;"}m building cutting-edge web applications using modern technologies such as Next.js{"&lsquo;"} TypeScript{"&lsquo;"} Tailwindcss and much more.
                    You can follow me on Twitter where I share tech-related bites and build in public{"&lsquo;"} or you can follow me on GitHub.</p>
            </div>
        </section>
    )
}