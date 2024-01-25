import Navbar from "../components/Navbar"
import Image from "../assets/main_pic.svg"
import Discovery from "../Components/Discovery"
function LandingPage() {
  return (
    <div>
    <Navbar />
    <div className="flex-grow p-8">
      {/* Left side content */}
      <div className="max-w-lg ml-10">
        <h1 className="text-6xl text-gray-600 font-bold mt-8">A Launch Pad for Student Projects</h1>
        <p className="text-gray-400 text-lg mt-6">
          Finvest connects students with innovative ideas with investors and other innnovative students to kickstart their startups. </p>
        <div className="mt-4 flex space-x-6 mt-8">
          <button className="bg-primary text-white px-4 py-3 rounded-md font-bold">
            Join as Investor
          </button>
          <button className="border border-black text-black px-4 py-3 rounded-md font-bold">
            Sign In
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex items-center float-right mt-[-380px]">
        <img src={Image} alt="Image" className="w-[500px] h-[500px] mr-8 mb-10" />
        {/* Add your beautiful graphics or icons here */}
      </div>
    </div>
    <Discovery/>
    </div>
  )
}

export default LandingPage