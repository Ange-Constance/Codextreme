import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Nav = () => {
  const user = {
    name: 'John Doe',
    UserProfilePicture: 'https://placekitten.com/30/30',
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between">
      {/* Left side - Logo and Name */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-[80px] h-[70px] ml-[-5px] mb-8" />
        <span className="text-gray-600 text-[25px] font-bold ml-4 mb-8">Finvest</span>
      </div>

    
      {/* Right side - Navigation and Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded-md"
        />

        <ul className="flex space-x-4 ">
          <Link to="/community">
            <li><a href="#" className="text-black">Community</a></li>
          </Link>

          <Link to="/projects">
            <li><a href="#" className="text-black">Projects</a></li>
          </Link>
        </ul>

        {/* Profile Section with Dropdown */}
        <div className="relative flex items-center">
          <span className="h-6 bg-gray-300 border-r-2 border-gray-200" />

          <button
            onClick={toggleDropdown}
            className="flex items-center text-black focus:outline-none"
          >
            <span className="text-gray-600 ml-4">{user.name}</span>
            <img
              src={user.UserProfilePicture}
              alt="User Profile"
              className="w-8 h-8 rounded-full ml-4"
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-white border rounded-md shadow-md">
              <ul className="py-2">
                <li className="px-4 py-2">
                  <Link to="/preferences" className="text-black">Preferences</Link>
                </li>
                <li className="px-4 py-2">
                  <button
                    className="text-black"
                    onClick={() => {
                      // Add your logout logic here
                    }}
                  >
                    <Link to="/">
                    Logout
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
