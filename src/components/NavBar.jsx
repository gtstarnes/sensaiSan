import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <>
    <nav className="text-white flex justify-between items-center h-16 max-w-[2240px] px-4 margin-auto" >
        <p className="p-2 text-[#00df9a] text-3xl font-bold">SENSAI SAN</p>
        <ul className="hidden md:flex">
            <li className="p-2 px-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold lg:text-xl">Home</li>
            <li className="p-2 px-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold lg:text-xl">About</li>
            <li className="p-2 px-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold lg:text-xl">Web Dev</li>
            <li className="p-2 px-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold lg:text-xl">Language</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
    </nav>
    <nav className={!nav ? "text-white fixed left-0 top-0 w-[60%] flex flex-col bg-[#000300] h-full border-r border-r-gray-700 max-w-[2240px] px-4 md:hidden" : "text-white fixed left-[-100%] top-3 w-[60%] flex flex-col bg-[#000300] h-full border-r border-r-gray-700 max-w-[2240px] px-4 ease-in-out duration-500"} >
        <p className="m-4 w-full text-[#00df9a] text-3xl font-bold">SENSAI SAN</p>
        <ul className="uppercase p-4">
            <li className="text-xl p-2 pr-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold border-b border-b-gray-600 ">Home</li>
            <li className="text-xl p-2 pr-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold border-b border-b-gray-600 ">About</li>
            <li className="text-xl p-2 pr-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold border-b border-b-gray-600 ">Web Dev</li>
            <li className="text-xl p-2 pr-4 rounded-sm hover:bg-[#00df9a] hover:text-[#000300] active:font-bold ">Language</li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar