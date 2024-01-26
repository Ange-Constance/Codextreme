import Logo from "../assets/Finvest-White.png"
import Image from "../assets/main_pic.svg"
const Login = () => {
  return (
    <div className="min-h-screen flex items-center w-full  bg-primary font-primary ">
    <form className="w-full max-w-md p-6 bg-white rounded-md shadow-md ml-16">
      <h2 className="text-2xl font-bold mb-6">Log In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-blue-100 focus:bg-white"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring focus:border-blue-100 focus:bg-white"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-1/2 bg-primary ml-20 mt-4 items-center text-white t p-2 rounded-[20px] hover:bg-secondary focus:outline-none focus:ring focus:border-blue-300"
      >
       Log In 
      </button>
    </form>
    <div className="">
        <img src={Logo} alt="logo" className="w-1/2 h-1/2 ml-[150px] mt-10 " />
        <img src={Image} alt="vector" className="w-1/2 h-1/2 ml-[150px]  " />
      </div>
  </div>
  );
};

export default Login;