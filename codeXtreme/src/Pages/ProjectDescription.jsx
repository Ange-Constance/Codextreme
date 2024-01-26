// src/components/ProjectDescription.js

import projectImage from '../assets/vr-lenses.png';

const ProjectDescription = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row bg-white p-8 shadow-lg rounded-lg">
        <div className="md:w-1/3">
          <img src={projectImage} alt="Project" className="rounded-lg" />
        </div>
        <div className="md:w-2/3 mt-4 md:mt-0 md:ml-4">
          <h2 className="text-2xl font-semibold mb-2">Project Title</h2>
          <p className="text-gray-600 mb-4">Date of Publish: January 26, 2024</p>
          <p className="text-lg leading-relaxed mb-4">
            Full project description goes here. Provide all the details you need.
          </p>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">&#9733;</span>
            <span className="text-yellow-500 mr-2">&#9733;</span>
            <span className="text-yellow-500 mr-2">&#9733;</span>
            <span className="text-gray-400">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
