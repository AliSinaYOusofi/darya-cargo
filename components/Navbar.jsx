import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Image from "next/image";
import Logo from "/public/images/logo.jpg";
import { FaHome, FaThLarge, FaBoxes, FaPhoneAlt, FaHeart } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const { theme, setTheme } = useTheme()
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <section className="relative mx-auto logo">
        {/* navbar */}
        <nav
          className={`flex "
          }  justify-between  w-screen`}
        >
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <Link className="text-3xl font-heading" href="#">
              <Image
                className=" h-[40px] w-[40px] logo  md:w-[70px] md:h-[70px]  rounded-full"
                src={Logo}
                alt="Cargo Image"
                priority
              />
            </Link>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto  font-heading space-x-12">
              <li className="group">
                <a className={`relative ${pathname === "/" ? "underline" : ""}`} href="/">
                  Home
                  <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
              <li className="group">
                <a
                  className={`relative ${pathname === "/about" ? "underline" : ""} `}
                  href="/about"
                >
                  About Us
                  <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
              <li className="group">
                <a
                  className={`relative ${pathname === "/contact" ? "underline " : ""} `}
                  href="/contact"
                >
                  Contact
                  <span className="block h-0.5 w-0 bg-gray-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            </ul>

            {/* Header Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              

              {/* Sign In / Register */}

              <div className=" flex mr-6 items-center" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === "light" ? (
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                  </button>
                ) : (
                  <button className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div
            className="xl:hidden flex mr-6 items-center"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === "light" ? (
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </button>
            ) : (
              <button className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
              </button>
            )}
          </div>

          

          <div className="xl:hidden flex mr-6 items-center">
            <Hamburger size={24} toggled={isMobileNavOpen} toggle={setIsMobileNavOpen}/>
          </div>
        </nav>
        <div>
            {
              isMobileNavOpen && <MobileNav open={isMobileNavOpen} />
            }
          </div>
      </section>
    </>
  );
}

const MobileNav = ({ open }) => {
  const iconHover =
    "transition-transform duration-300 group-hover:-translate-y-1";

  return (
    <ul className="xl:hidden font-[family-name:var(--font-geist-sans)] w-full gap-y-6 text-center text-3xl flex flex-col justify-center mb-10 divide-gray-400 items-center px-4 mx-auto  font-heading space-y-4">
      {[
        { href: "/", icon: CiHome, text: "Home" },
        { href: "/about", icon: CiCircleInfo, text: "About Us" },
        { href: "/contact", icon: CiHeadphones, text: "Contact" },
      ].map(({ href, icon: Icon, text }, index) => (
        <li className="w-full mt-4" key={index}>
          <a
            className={`flex rounded-full group items-center justify-center gap-2 py-2 w-full`}
            href={href}
          >
            <Icon className={iconHover} />
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
