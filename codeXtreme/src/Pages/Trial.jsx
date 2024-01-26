
import Mage from "../assets/members-pana.svg"
const Trial = () => {
  return (
    <div className="flex flex-row">
    <div className="mt-[100px] ml-6">
      <img src={Mage} alt="life" className="w-[500px] h-[600px]" />
    </div>
    
    <div className="flex items-center w-[60px] h-3/4 mt-[150px] ml-16  ">
      <div className="bg-white border-green-500 border p-10 rounded-lg flex justify-center ">
        <div className="w-20 h-20 bg-white border-green-500 border rounded-full mr-8"></div>
        <div>
          <h1 className="text-6xl text-gray-600 font-bold mt-8">A Launch Pad for Student Projects</h1>
        <p className="text-gray-400 text-lg mt-6">
         Get Inspired, Support Students Project with rating,comments,opinion and be a part of our ideal community.
          </p>
          <button className="bg-primary rounded-lg text-white font-bold text-sm p-4 mt-6  ">
            Join as Member
          </button>
        </div>
        <div className="w-20 h-20 bg-white border-green-500 border rounded-full ml-8"></div>
      </div>
    </div>
    </div>
  );
};

export default Trial;
