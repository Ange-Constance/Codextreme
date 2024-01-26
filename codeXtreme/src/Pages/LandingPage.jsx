import Navbar from "../components/Navbar"
import Image from "../assets/main_pic.svg"
import Discovery from "../Components/Discovery"
import ProjectCard from "../Components/ProjectCard"
import { Link } from "react-router-dom";
import Trial from "./Trial";
function LandingPage() {

  const projects = [
    {
      id: 1,
      user: { name: 'John Doe', profilePicture: 'https://placekitten.com/30/30' },
      projectImage: 'https://placekitten.com/150/150',
      title: 'Synthify',
      description: "Introducing Project Synthify – a revolutionary music synthesis platform that empowers musicians, producers, and sound enthusiasts to create rich, dynamic soundscapes effortlessly.", 
      date: 'Jan 25, 2024',
      comments: ["This is a great project!", "I love the design.", "How do you guys come up with this ideas"],
    },
    {
      id: 2,
      user: { name: 'John Doe', profilePicture: 'https://placekitten.com/30/30' },
      projectImage: 'https://placekitten.com/150/150',
      title: 'Synthify',
      description: "Introducing Project Synthify – a revolutionary music synthesis platform that empowers musicians, producers, and sound enthusiasts to create rich, dynamic soundscapes effortlessly.",
      date: 'Jan 25, 2024',
      comments: ["This is a great project!", "I love the design.", "How do you guys come up with this ideas"],
    },
    {
      id: 3,
      user: { name: 'John Doe', profilePicture: 'https://placekitten.com/30/30' },
      projectImage: 'https://placekitten.com/150/150',
      title: 'Synthify',
      description: "Introducing Project Synthify – a revolutionary music synthesis platform that empowers musicians, producers, and sound enthusiasts to create rich, dynamic soundscapes effortlessly.", 
      date: 'Jan 25, 2024',
      comments: ["This is a great project!", "I love the design.", "How do you guys come up with this ideas"],
    },
    {
      id: 4,
      user: { name: 'John Doe', profilePicture: 'https://placekitten.com/30/30' },
      projectImage: 'https://placekitten.com/150/150',
      title: 'Synthify',
      description: "Introducing Project Synthify – a revolutionary music synthesis platform that empowers musicians, producers, and sound enthusiasts to create rich, dynamic soundscapes effortlessly.", 
      date: 'Jan 25, 2024',
      comments: ["This is a great project!", "I love the design.", "How do you guys come up with this ideas"],
    },
 
  ];
  
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
            <Link to="/signin">
            Join as Investor
            </Link>
          </button>
          <button className="border border-black text-black px-4 py-3 rounded-md font-bold">
            <Link to="/signin">
            Join as Student
            </Link>
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className="flex items-center float-right mt-[-380px]">
        <img src={Image} alt="Image" className="w-[500px] h-[500px] mr-8 mb-10" />
        {/* Add your beautiful graphics or icons here */}
      </div>
    </div>
    <div className="">
   <Trial/>
   </div>
   
    <Discovery/>
    <div className="justify-center h-screen items-center flex-initial w-2/4 ml-16 mt-[120px]">
    {projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}

    </div>
    </div>
  )
}

export default LandingPage