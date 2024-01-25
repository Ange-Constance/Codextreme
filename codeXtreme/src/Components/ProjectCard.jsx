// src/components/ProjectCard.jsx
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProjectCard = ({ user, projectImage, title, description, date, comments }) => {
  const [showComments, setShowComments] = useState(false);
  const [rating, setRating] = useState(0);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  return (
    <div className="border-t p-2 pl-8 rounded-md shadow-sm bg-white mb-6">
      {/* User Information */}
      <div className="flex items-center mb-2">
        <img
          src={user.profilePicture}
          alt="User Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="text-sm font-bold text-md">{user.name}</p>
          <p className="text-xs text-gray-500 text-md">{date}</p>
        </div>
      </div>

      {/* Project Image and Description */}
      <div className="flex">
        {/* Project Image */}
        <div className="flex-shrink-0">
          <img
            src={projectImage}
            alt="Project Image"
            className="w-20 h-20 object-cover rounded-md"
          />
        </div>

        {/* Project Description */}
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-bold text-2xl">{title}</h2>
          <p className="text-gray-600 mt-1 text-md">{description}</p>
        </div>
      </div>

      {/* Interaction Icons and Comments */}
      <div className="flex items-center mt-4">
        {/* Rating Section */}
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-2 font-bold">Rate this project:</p>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar
                key={index}
                className={index <= rating ? 'text-primary cursor-pointer' : 'text-gray-300 cursor-pointer'}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Show Comments Button */}
        <div className="ml-auto">
          <button onClick={handleToggleComments} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="mt-4 overflow-y-auto max-h-40">
          {comments.map((comment, index) => (
            <p key={index} className="text-sm text-gray-500 mb-2">
              {comment}
            </p>
          ))}
          <input type="text" placeholder="Add a comment" className="w-full p-2 border rounded-md"/>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
