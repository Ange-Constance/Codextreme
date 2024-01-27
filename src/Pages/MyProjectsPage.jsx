import Image from "../assets/vr-lenses.png";
import React, { useState } from 'react';
import Nav from "./Nav";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D', // Replace with your image URL
    title: 'Revolutionary Music ',
    date: 'January 1, 2022',
    ratings: 4.5,
    description: 'A groundbreaking project that revolutionizes the music industry with innovative features and cutting-edge technology.',
    link: 'https://example.com/project1',
    investors: 21,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1677627004049-e028e214a388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYyfHxyb2JvdGljc3xlbnwwfDB8MHx8fDA%3D', // Replace with your image URL
    title: 'Renewable Energy',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to harness renewable energy sources, contributing to a sustainable and eco-friendly future.',
    link: 'https://example.com/project4',
    investors: 15,
  },
  
 
];

const MyProjectsPage = () => {
  
  const numRows = Math.ceil(projectsData.length / 3);
  
  return (
    <div className="font-primary">
    <Nav />
    <div className="p-2 mt-32">
    
      <div className="flex justify-between items-center mb-8">
       
       <div className="flex flex-row">
       <h1 className="text-3xl font-bold ml-12">My projects</h1>        
       </div>
        
        <div className="flex items-center space-x-4">
         
         <Link to="/projectform">
          <button className="bg-primary text-white px-4 py-2 rounded-md mr-12 ">
            + Add a New Project
          </button>
          </Link>
      
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative">
        {/* Rows Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-12 mr-12">
          {/* Map over the projects for each row */}
          {projectsData.map((project) => (
            <div key={project.id} className="w-full sm:w-auto">
              {/* Project Card */}
              <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-30 object-cover mb-4 rounded-md"
                />

          <div className="grid grid-cols-2 gap-48">
            <div className="">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            </div>

            <div className="grid grid-cols-4 ml-6 gap-6 ">
              <div >
                <Link to="/">
                 <FaEdit className="text-2xl text-primary" />
               </Link>
            </div>
            <div >
              <Link to="/">
            <FaTrash className="text-2xl text-red-800" />
            </Link>
            </div>
            </div>
          </div>

                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span>{project.ratings}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>

                <div className="flex">
                  <div className="p-2">
                <Link to="/projectdescription"
                  className="text-blue-500 hover:underline mb-2"
                >
                  Visit Project
                </Link>
                <p className="text-sm text-gray-500">
                  Investors: {project.investors}
                </p>
                </div>

                <div className="pt-2 pl-24">
                <button className="bg-primary text-white px-4 py-2 rounded-md ">
                 Auction Your Project
                </button>
                </div>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyProjectsPage;
