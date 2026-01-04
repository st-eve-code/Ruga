import React from 'react';
import Logo from '../assets/Logo/white_.png';
import {FaUser} from 'react-icons/fa';
function Header() {
  const Nav_menu = [
    'Home', 'About','Contact','Booking', 'Gyms'
  ]
  return (
    <div className="flex items-center justify-center gap-4 ">
        <div className="size-48">
          <img src={Logo} alt=""/>
        </div>
        <div className="flex items-center justify-between flex-lg-shrink-0 max-md:flex-nowrap mt-[-4.5rem]">
        <ul className="flex items-center gap-5 px-4 font-inter">
          {
            Nav_menu.map(
              (items, id) => {
                return (
                  <div>
                    <li key={id} className="text-white cursor-pointer hover:text-green-400">
                      {items}
                    </li>
                  </div>
                )
              }
            )
          }
        </ul>
        <label for="account" className="px-3 text-white cursor-pointer hover:text-green-300"> Login </label>
        </div>
        <div className="mt-[-4.5rem] px-4">
          <button type="button" id="signup" className="px-8 py-1 text-black bg-white rounded-md hover:bg-green-400 hover:text-white">
            Signup
          </button>
        </div>
        {/* <FaUser size={20} color="white" classname="px-10"/> */}
    </div>
  )
}

export default Header