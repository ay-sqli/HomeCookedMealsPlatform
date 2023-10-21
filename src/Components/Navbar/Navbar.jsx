import React, { useState } from "react";
import './Navbar.css'
import DropMenu from "./DropDownMenu/DropMenu";
import {AiFillCaretDown } from "react-icons/ai"
import {BiCartAlt, BiSearchAlt, BiLogIn} from "react-icons/bi"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(`isMenuOpen: ${isMenuOpen}`);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log(`isSearchOpen: ${isSearchOpen}`);
  };

  return(
    <nav className="Navbar">
        <a href="#"><h1 className="Logo">Home Chef</h1></a>

        <div className="Middle-Nav">
        <ul>
              <li className="hover:bg-red-300 duration-500 rounded-full py-2 px-4 font-semibold cursor-pointer">Home</li> 
              <li className="hover:bg-red-300 duration-500 rounded-full py-2 px-4 font-semibold cursor-pointer flex justify-center items-center" onClick={toggleMenu}>Menu<AiFillCaretDown style={{ marginLeft: '5px' }} /> <DropMenu isopen={isMenuOpen} /></li>
              <li className="hover:bg-red-300 duration-500 rounded-full py-2 px-4 font-semibold cursor-pointer flex justify-center items-center" onClick={toggleSearch}>Search<BiSearchAlt style={{ marginLeft: '5px' }}/>
              </li>
              <div className={`${isSearchOpen ? 'active' : ''} search bg-white py-3 px-2 m-6 `}>
                    <input type="text" name="search" placeholder="search"></input><BiSearchAlt style={{ marginLeft: '5px' }} className="hover:text-red-500 duration-200 rounded-full"/>
                </div>
         </ul>
        </div>
       

        <div className="Right-Nav">
          <ul>

          <li className="bg-white hover:bg-red-200 duration-500 py-2 px-2 m-2 relative rounded-full shadow-md">
            <BiCartAlt style={{ fontSize: '1.5rem' }} />
            <span className="absolute top-0 right-0 bg-red-500 w-4 h-4 rounded-full flex justify-center items-center text-white text-xs">1</span>
          </li>            
          <li><button className="bg-red-400 hover:bg-red-300 duration-500 text-white font-bold py-3 px-8 m-3 rounded-full">Login<BiLogIn style={{ fontSize: '1.3rem', marginLeft: '3px' }}/></button></li>
          
          </ul>
        </div>

    </nav>
  )
  
};
