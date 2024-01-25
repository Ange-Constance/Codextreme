import ProjectCard from "../Components/ProjectCard"
import TrendingCard from "../components/TrendingCard"
import Navbar from "../components/Navbar";
function CommunityPage() {

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
    <div className="flex ml-40 mr-40">    
     
    <div className="justify-center h-screen items-center flex-initial w-4/5">
    {projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}

    </div>
    <div className="flex-initial w-2/5">
    <TrendingCard />   
    </div>

  </div>
  </div>
  )
}

export default CommunityPage