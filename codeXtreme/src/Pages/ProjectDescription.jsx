import projectImage from '../assets/vr-lenses.png';
import Nav from '../Components/Nav';
import React, { useState } from 'react';

const ProjectDescription = () => {

    const [showComments, setShowComments] = useState(false);
    const [rating, setRating] = useState(0);
  
    const handleToggleComments = () => {
      setShowComments(!showComments);
    };
  
    const handleStarClick = (clickedRating) => {
      setRating(clickedRating);
    };

    const comments = [
        "This is a great project!",
         "I love the design.",
          "How do you guys come up with this ideas"
    ]

  return (
    <div>
     <Nav/>   
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl bg-white p-8 ">
        <div className="text-center">
          <img src={projectImage} alt="Project" className="rounded-lg mb-4 mx-auto" />
          
        </div>
        <div className="text-lg leading-relaxed mt-4">
        <h2 className="text-4xl font-semibold mt-2">Project Title</h2>
        <p className="mt-4">
            <strong>Deadline:</strong> January 31, 2024
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500 text-2xl mr-2">&#9733;</span>
          <span className="text-yellow-500 text-2xl mr-2">&#9733;</span>
          <span className="text-yellow-500 text-2xl mr-2">&#9733;</span>
          <span className="text-gray-400 text-2xl">&#9733;</span>
        </div>

        <div className="flex items-center ml-[400px] float-right mt-[-80px] ">
              <span className="mr-4 font-bold text-gray-500">Investors: 50</span>
              <button className="bg-primary text-white px-4 py-2 rounded">
                Auction Your Project
              </button>
            </div>

          <p className='mt-4'>
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
            Full project description goes here. Provide all the details you need.
            This description can be very long and can span multiple lines.
          </p>
          <div className="flex items-center mt-4">
          <div className="ml-auto">
          <button onClick={handleToggleComments} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
      </div>
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
    </div>
      </div>
    
    
  );
};

export default ProjectDescription;
