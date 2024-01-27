import ProjectCard from "./ProjectCard"
import TrendingCard from "./TrendingCard"
import Nav from "./Nav";
function CommunityPage() {

  const projects = [
    {
      id: 1,
      user: { name: 'Alice Johnson', profilePicture: 'https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2ZpbGV8ZW58MHwwfDB8fHww' },
      projectImage: 'https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWl8ZW58MHwwfDB8fHww',
      title: 'Inventify',
      description: "Introducing Project Inventify – a groundbreaking innovation platform that inspires inventors, engineers, and creators to develop cutting-edge solutions effortlessly.",
      date: 'Feb 10, 2024',
      comments: ["This project is amazing!", "The concept is brilliant.", "Looking forward to seeing more."],
    },
    {
      id: 2,
      user: { name: 'Bob Smith', profilePicture: 'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' },
      projectImage: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWl8ZW58MHwwfDB8fHww',
      title: 'TechConnect',
      description: "Presenting Project TechConnect – a state-of-the-art technology networking platform connecting tech enthusiasts, professionals, and innovators globally.",
      date: 'Feb 15, 2024',
      comments: ["Impressive work!", "The design is outstanding.", "Can't wait to try it out."],
    },
    {
      id: 3,
      user: { name: 'Eva Brown', profilePicture: 'https://placekitten.com/30/33' },
      projectImage: 'https://images.unsplash.com/photo-1495055154266-57bbdeada43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'EcoHarmony',
      description: "Explore Project EcoHarmony – an ecological initiative that promotes harmony between humans and nature by fostering sustainable practices and lifestyles.",
      date: 'Feb 20, 2024',
      comments: ["Fantastic project!", "It's so important for the environment.", "Keep up the good work!"],
    },
    {
      id: 4,
      user: { name: 'Charlie Davis', profilePicture: 'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
      projectImage: 'https://images.unsplash.com/photo-1689443111384-1cf214df988a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFpfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'ArtBlend',
      description: "Discover Project ArtBlend – a unique art collaboration platform that brings together artists, creators, and art enthusiasts to blend diverse artistic styles and perspectives.",
      date: 'Feb 25, 2024',
      comments: ["Artistic genius!", "Love the concept.", "Excited to see more collaborations."],
    },
    {
      id: 5,
      user: { name: 'Grace Miller', profilePicture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
      projectImage: 'https://images.unsplash.com/photo-1574803442176-70d4b465c920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGFpfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'HealthHub',
      description: "Introducing Project HealthHub – a health and wellness platform that empowers individuals to achieve their fitness goals, track health metrics, and connect with like-minded enthusiasts.",
      date: 'Mar 5, 2024',
      comments: ["Great health initiative!", "Looking forward to trying it out.", "Best of luck with the launch!"],
    },
    {
      id: 6,
      user: { name: 'David White', profilePicture: 'https://placekitten.com/30/36https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' },
      projectImage: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'CodeCraft',
      description: "Explore Project CodeCraft – an online coding community that fosters collaboration, learning, and innovation among programmers, developers, and coding enthusiasts.",
      date: 'Mar 10, 2024',
      comments: ["CodeCraft is awesome!", "The coding challenges are great.", "Exciting community to be a part of."],
    },
    {
      id: 7,
      user: { name: 'Olivia Taylor', profilePicture: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfDB8MHx8fDA%3D' },
      projectImage: 'https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFncmljdWx0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
      title: 'TravelVista',
      description: "Embark on a journey with Project TravelVista – a travel planning platform that helps adventurers discover new destinations, share travel stories, and connect with fellow globetrotters.",
      date: 'Mar 15, 2024',
      comments: ["Love the travel inspiration!", "The interface is user-friendly.", "Dreaming of my next adventure!"],
    },
    {
      id: 8,
      user: { name: 'Mia Wilson', profilePicture: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHwwfDB8fHww' },
      projectImage: 'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNvY2lhbHxlbnwwfDB8MHx8fDA%3D',
      title: 'FoodFiesta',
      description: "Savor the flavors of Project FoodFiesta – a culinary platform that brings foodies, chefs, and home cooks together to explore recipes, share cooking tips, and celebrate the joy of food.",
      date: 'Mar 20, 2024',
      comments: ["Delicious recipes!", "Exciting cooking challenges.", "Let's cook together!"],
    }
    
    
 
  ];


  return (
    <div className="font-primary">
      <Nav />
    <div className="flex ml-40 mr-40 mt-32">    
     
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