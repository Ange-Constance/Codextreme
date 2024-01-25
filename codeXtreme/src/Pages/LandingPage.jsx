import Navbar from "../components/Navbar"
import Image from "../assets/project.svg"
function LandingPage() {
  return (
    <div>

    <Navbar />
    <div className="flex-grow p-8">
      {/* Left side content */}
      <div className="max-w-lg ml-2">
        <h1 className="text-6xl text-tertiary font-bold mb-4">A Launch Pad for Student Projects</h1>
        <p className="text-gray-700 text-lg">
          Finvest connects students with innovators and other innovative students.
        </p>
        <div className="mt-4 flex space-x-6 mt-4">
          <button className="bg-primary text-white px-4 py-3 rounded-md font-bold">
            Join as Investor
          </button>
          <button className="border border-black text-black px-4 py-3 rounded-md font-bold">
            Sign In
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex items-center float-right mt-[-320px]">
        <img src={Image} alt="Image" className="w-[500px] h-[500px] mr-8 mb-10" />
        {/* Add your beautiful graphics or icons here */}
      </div>
    </div>
    </div>
  )
}

export default LandingPage