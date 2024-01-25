// Updated TrendingCard component

import { Link } from 'react-router-dom';

const TrendingCard = () => {
  const trendingProjects = [
    {
      id: 1,
      user: { name: 'John Doe', profilePicture: 'https://placekitten.com/30/30' },
      category: 'Cybersecurity',
      title: 'Project 1',
    },
    {
      id: 2,
      user: { name: 'Jane Doe', profilePicture: 'https://placekitten.com/30/30' },
      category: 'Agriculture',
      title: 'Project 2',
    },
    {
      id: 3,
      user: { name: 'Jane Doe', profilePicture: 'https://placekitten.com/30/30' },
      category: 'Agriculture',
      title: 'Project 3',
    },
    {
      id: 4,
      user: { name: 'Jane Doe', profilePicture: 'https://placekitten.com/30/30' },
      category: 'Agriculture',
      title: 'Project 4',
    },
  ];

  const recommendedFields = [
    'Machine Learning',
    'Web Development',
    'Data Science',
    'Mobile Apps',
    'Cybersecurity',
    'Agriculture',
    // Add more fields as needed
  ];

  return (
    <div className="mx-2 my-4 p-6 bg-white rounded-md shadow-md overflow-hidden">
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
        <Link to="/trending" className="text-white focus:outline-none block ">
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
