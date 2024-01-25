
import React from 'react';
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      {/* Left side - Logo and Name */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-[80px] h-[70px] ml-[-5px] mb-8" />
        <span className="text-black text-[25px] font-bold ml-[-5px]  mb-8">Finvest</span>
      </div>

      {/* Right side - Links and Get Started button */}
      <div className="flex items-center mr-4 mb-8">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-black">Our Story</a></li>
          <li><a href="#" className="text-black">Community</a></li>
          <li><a href="#" className="text-black">Projects</a></li>
          <li><a href="#" className="text-black">Sign In</a></li>
        </ul>

        <button className="bg-black text-white py-2 px-4 rounded-md ml-4">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;