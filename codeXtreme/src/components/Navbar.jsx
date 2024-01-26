
import Logo from '../assets/Finvest_Logo.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex items-center justify-between mt-2">
      {/* Left side - Logo and Name */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-[170px] h-[40px] ml-12 mb-8" />
        {/* <span className="text-black text-[25px] font-bold ml-[-5px]  mb-8">Finvest</span> */}
      </div>

      {/* Right side - Links and Get Started button */}
      <div className="flex items-center mr-6 mb-8">
        <ul className="flex space-x-4">
        <Link to="/ourstory">
          <li><a href="#" className="text-black">Our Story</a></li>
        </Link>
        

          <Link to="/projects">
          <li><a href="#" className="text-black">Projects</a></li>
          </Link>

          <Link to="/signin">
          <li><a href="#" className="text-black">Sign In</a></li>
          </Link>
        </ul>

        <button className="bg-primary text-white py-2 px-4 rounded-lg ml-4 font-bold">
        <Link to="/singup">
          Get Started
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;