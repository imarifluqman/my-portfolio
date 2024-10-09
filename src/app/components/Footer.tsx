// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/app/public/logo-white.png"

const Footer = () => {
    return (
        <footer className="bg-black text-white p-4">
            <div className="lg:container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <Link href="/">   <Image src={Logo} alt="Logo" width={100} height={100} /></Link>
                </div>
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
