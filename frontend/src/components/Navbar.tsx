import React from 'react'
import logo from '../assets/logo.jpg'
import { ContextState } from '../context/Provider';
const Navbar = () => {

  const {cartSelect,setCartSelect}=ContextState();

  return (
    <>
      <nav
        className={`sticky top-0 z-10 w-full px-4 pt-10 md:py-5 md:px-20 flex items-center justify-between ${
          cartSelect ? "bg-white text-gray-600" : "bg-black/30"
        }  backdrop-blur-md`}
      >
        <div className="flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-[30px] w-[32.2px]" onClick={()=>setCartSelect(false)} />
        </div>

        <div className="flex items-center space-x-10">
          <div className="text-sm flex gap-6 md:text-lg">
            <a href="#about" className="cursor-pointer hover:underline">
              About Us
            </a>
            <a href="#waitlist" className="cursor-pointer hover:underline">
              Waitlist
            </a>
            <a
              href="#cart"
              className={`cursor-pointer hover:underline ${
                cartSelect ? "underline text-black" : ""
              }`}
            >
              Cart
            </a>
          </div>

          <div>
            {!cartSelect && (
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold cursor-pointer hover:bg-red-600 hover:text-white transition ease-in-out duration-300">
                Buy
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
