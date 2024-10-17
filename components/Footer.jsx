import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Logo from '/public/images/logo.jpg'

export default function Footer() {

    
    return (
        <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="flex md:flex-row items-center justify-between flex-wrap flex-col gap-y-4">
                <div>
                    <a className="mx-auto text-xl font-semibold text-black focus:outline-none" href="/">
                        <Image
                            className=" h-[40px] w-[40px]  md:w-[60px] md:h-[60px]  rounded-full"
                            src={Logo}
                            alt="Cargo Image"
                            priority
                        />
                    </a>
                </div>

                <ul className="text-center ">
                    <li className="inline-block  relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm  focus:outline-none focus:text-gray-800" href="/">
                            Home
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm  focus:outline-none focus:text-gray-800" href="/about">
                            About Us
                        </a>
                    </li>
                    <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300">
                        <a className="inline-flex gap-x-2 text-sm  focus:outline-none focus:text-gray-800" href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="flex justify-center space-x-6 invisible">
                    <a href="/about" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="transition-all duration-300 hover:-translate-y-1" size={24} />
                    </a>
                    <a href="/about" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="transition-all duration-300 hover:-translate-y-1" size={24} />
                    </a>
                    <a href="/about" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp className="transition-all duration-300 hover:-translate-y-1" size={24} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
