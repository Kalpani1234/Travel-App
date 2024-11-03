import { useState } from 'react'
import { FaHome, FaInfo } from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {BiSolidContact} from "react-icons/bi";

const navItems = [
  {
    id: 1,
    text: "Home",
    icon: <FaHome />,
    link: "#"
  },
  {
    id: 2,
    text: "About",
    icon: <FaInfo />,
    link: "#"
  },
  {
    id: 3,
    text: "Service",
    icon: <MdWork />,
    link: "#"
  },
  {
    id: 4,
    text: "Contact",
    icon: <BiSolidContact />,
    link: "#"
  },
]
export const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false)

  const toggleNavbar = () => {
    setOpenNavbar(openNavbar => !openNavbar)
  }

  return (
      <>
        <header className="sticky top-5 m-5 -my-10 flex items-center h-20 rounded-lg z-40 backdrop-blur bg-white/30">
          <nav className="relative mx-auto w-full px-5 flex gap-x-5 justify-between items-center max-w-7xl">
            <div className="flex items-center min-w-max relative">
              <a href="#">
                <img className="h-24 w-auto" alt="Brand" src="/logo.png"/>
              </a>
            </div>
            <div className={`
                    fixed inset-x-0 lg:h-max top-0 lg:opacity-100 backdrop-blur bg-white/50 sm:backdrop-blur-none rounded-lg lg:!bg-transparent py-20 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:top-0 lg:relative lg:flex lg:justify-between lg:gap-x-8
                    ${openNavbar ? "" : "-translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:space-x-8"}
                `}>
              <ul className="flex flex-col lg:flex-row lg:justify-end items-center text-gray-800 font-semibold lg:w-full lg:pl-10 gap-8">
                {
                  navItems.map(navItem => (
                      <li key={navItem.id}>
                        <a href={navItem.link} className="relative py-2.5 duration-300 ease-linear">
                            <span className="flex items-center gap-2">
                                {navItem.icon}
                                <span>{navItem.text}</span>
                            </span>
                        </a>
                      </li>
                  ))
                }
              </ul>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-4 lg:min-w-max mt-10 lg:mt-0">
                <a href="#" className="h-10 flex items-center justify-center w-full max-w-xs mx-auto rounded-md px-5 backdrop-blur bg-white/10 font-semibold">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <button onClick={() => { toggleNavbar() }} className="outline-none border-l pl-3 relative py-3">
                <span className="sr-only">Toggle navbar</span>
                <span aria-hidden="true" className={`
                            flex h-0.5 w-6 rounded bg-gray-800 transition duration-300
                            ${openNavbar ? "rotate-45 translate-y-[0.33rem]" : ""}
                        `} />
                <span aria-hidden="true" className={`
                            flex mt-2 h-0.5 w-6 rounded bg-gray-800 transition duration-300
                            ${openNavbar ? "-rotate-45 -translate-y-[0.33rem]" : ""}
                        `} />
              </button>
            </div>
          </nav>
        </header>
      </>
  )
}