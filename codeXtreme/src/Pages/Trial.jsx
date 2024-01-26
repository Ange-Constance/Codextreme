
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
          <h1 className="text-2xl text-center font-bold mb-4">Our Community</h1>
          <p className="text-gray-600">
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
          </p>
          <button className="bg-primary rounded-lg text-white font-bold text-sm p-4 mt-6 ml-[140px] ">
            Join our Community
          </button>
        </div>
        <div className="w-20 h-20 bg-white border-green-500 border rounded-full ml-8"></div>
      </div>
    </div>
    </div>
  );
};

export default Trial;
