import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Logo from '../public/images/WhatsApp Image 2024-10-13 at 13.36.48_3da1269d.jpg'
import { usePathname } from 'next/navigation';

export default function Footer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-[#ffc100] rounded-tr-lg rounded-tl-lg">
            <div className="flex md:flex-row items-center justify-between flex-wrap flex-col gap-y-4">
                <div>
                    <a className="mx-auto text-xl font-semibold text-black focus:outline-none" href="/">
                        <Image
                            className="h-[40px] w-[40px] md:w-[60px] md:h-[60px] rounded-full"
                            src={Logo}
                            alt="Cargo Image"
                            priority
                        />
                    </a>
                </div>

                <ul className="text-center ">
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-900">
                        <a className={`relative ${pathname === "/" ? " underline" : ""}`} href="/">
                            Home
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-000">
                        <a className={`relative ${pathname === "/about" ? " underline" : ""} `} href="/about">
                            About Us
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-900">
                        <a className={`relative ${pathname === "/contact" ? " underline" : ""} `} href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-white my-4"></div>
            
            {/* Footer Text */}
            <div className="text-center text-gray-600">
                <p>&copy; daryacargo {currentYear}</p>
                <p><a href="mailto:info@daryacargo.com" className="text-blue-500">info@daryacargo.com</a></p>
            </div>
        </footer>
    )
}
