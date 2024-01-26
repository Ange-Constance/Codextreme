// Updated TrendingCard component

import { Link } from 'react-router-dom';

const TrendingCard = () => {
  const trendingProjects = [
    {
        id: 1,
        user: { name: 'Alex Johnson', profilePicture: 'https://images.unsplash.com/photo-1527612820672-5b56351f7346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9ib3RpY3N8ZW58MHwwfDB8fHww' },
        category: 'Healthcare',
        title: 'MedicalHub',
      },
      {
        id: 2,
        user: { name: 'David White', profilePicture: 'https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Technology',
        title: 'TechConnect',
      },
      {
        id: 3,
        user: { name: 'Olivia Taylor', profilePicture: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Travel',
        title: 'Wanderlust',
      },
      {
        id: 4,
        user: { name: 'Mia Wilson', profilePicture: 'https://images.unsplash.com/photo-1570155308259-f4480a5c3696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Culinary',
        title: 'FoodExplorer',
      },
      {
        id: 5,
        user: { name: 'Olivia Taylor', profilePicture: 'https://plus.unsplash.com/premium_photo-1682464548420-a93d73c5ec89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Travel',
        title: 'AdventureJunkie',
      },
      {
        id: 6,
        user: { name: 'Mia Wilson', profilePicture: 'https://plus.unsplash.com/premium_photo-1682464782978-d2f13e0fbcb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Culinary',
        title: 'TasteBudDelight',
      },
      {
        id: 7,
        user: { name: 'Olivia Taylor', profilePicture: 'https://images.unsplash.com/photo-1625633605176-7a8b6b491eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D' },
        category: 'Travel',
        title: 'AdventureJunkie',
      },
      {
        id: 8,
        user: { name: 'Ganda guera' ,profilePicture: 'https://images.unsplash.com/photo-1632884333982-e3b4f9fddd0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxyb2JvdGljc3xlbnwwfDB8MHx8fDA%3D' },
        category: 'Cybersecurity',
        title: 'Top Secret',
      }
      
      
  ];

  const recommendedFields = [
    '#Machine Learning',
    '#Web Development',
    '#Data Science',
    '#Mobile Apps',
    '#Cybersecurity',
    '#Agriculture',
    '#Artificial Intelligence',
    '#Blockchain',
    '#Internet of Things (IoT)',
    '#Augmented Reality',
    '#Virtual Reality',
    '#Cloud Computing',
    '#Robotics',
    '#Biotechnology',
    '#Renewable Energy',
    '#Space Exploration',
    '#HealthTech',
    '#FinTech',
  
  ];

  return (
    <div className="mx-2 my-4 p-6 bg-white rounded-md shadow-md overflow-hidden font-primary">
      {/* Section 1: Trending Projects */}
      <div className="p-4 border-l border-b">
        <h2 className="text-lg font-bold mb-2">Trending Projects</h2>
        {trendingProjects.map((project) => (
          <div key={project.id} className="flex items-center mb-2">
            <img
              src={project.user.profilePicture}
              alt="User Profile"
              className="w-6 h-6 rounded-full mr-2"
            />
            <div>
              <p className="text-xs text-gray-600 font-bold">{project.user.name}</p>
              <p className="text-xs text-gray-500">{project.category}</p>
            </div>
            <p className="text-sm font-bold ml-auto">{project.title}</p>
          </div>
        ))}
        {/* View More Link */}
        <button class="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-2">
        <Link to="/projects" className="text-white focus:outline-none block ">
          View More
        </Link>
        </button>
      </div>

      {/* Section 2: Recommended Fields */}
      <div className="items-center text-center">
        <h2 className="text-lg font-bold mb-2">Recommended Fields</h2>
        <div className="p-4 grid grid-cols-2 gap-2">
          {recommendedFields.map((field, index) => (
            <div
              key={index}
              className="p-2 bg-gray-800 bg-opacity-30 rounded-md hover:bg-opacity-40 cursor-pointer"
            >
              <p className="text-sm">{field}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
