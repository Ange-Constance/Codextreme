import Image from "../assets/vr-lenses.png";
import React, { useState } from 'react';
import Nav from "../components/Nav";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    image: {Image},
    title: 'Project 1',
    date: 'January 1, 2022',
    ratings: 4.5,
    description: 'A groundbreaking project that revolutionizes...',
    link: 'https://example.com/project1',
    investors: 20,
  },
  {
    id: 2,
    image: {Image},
    title: 'Project 2',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to solve...',
    link: 'https://example.com/project2',
    investors: 15,
  },
  

 
];

const MyProjectsPage = () => {
  
  const numRows = Math.ceil(projectsData.length / 3);
  
  return (
    <div className="font-primary">
    <Nav />
    <div className="p-8 mt-32">
    
      <div className="flex justify-between items-center mb-8">
       
       <div className="flex flex-row">
       <h1 className="text-3xl font-bold ml-12">My projects</h1>        
       </div>
        
        <div className="flex items-center space-x-4">
         
          <button className="bg-primary text-white px-4 py-2 rounded-md mr-12 ">
            + Add a New Project
          </button>
      
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
                  src={Image}
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
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mb-2"
                >
                  Visit Project
                </a>
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
