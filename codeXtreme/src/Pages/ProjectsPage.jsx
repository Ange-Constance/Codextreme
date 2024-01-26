// src/components/BestProjectsPage.js
import Image from "../assets/vr-lenses.png";
import React, { useState } from 'react';
import Nav from "../Components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
// import Navbar from "../Components/Nav.jsx";
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
  {
    id: 3,
    image: {Image},
    title: 'Project 3',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to solve...',
    link: 'https://example.com/project2',
    investors: 15,
  },
  {
    id: 4,
    image: {Image},
    title: 'Project 4',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to solve...',
    link: 'https://example.com/project2',
    investors: 15,
  },
  {
    id: 5,
    image: {Image},
    title: 'Project 5',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to solve...',
    link: 'https://example.com/project2',
    investors: 15,
  },
  {
    id: 6,
    image: {Image},
    title: 'Project 6',
    date: 'February 15, 2022',
    ratings: 4.2,
    description: 'An innovative solution to solve...',
    link: 'https://example.com/project2',
    investors: 15,
  },
  // Add more project data as needed
];

const ProjectsPage = () => {

  
   
  
  // Calculate the number of columns based on the projectsData length
  const numRows = Math.ceil(projectsData.length / 3);


  
  return (
    <div className="font-primary">
    <Nav />
    <div className="p-8 mt-28 ">
      {/* Title and Search Bar */}
      <div className="flex justify-between items-center mb-8">
        {/* Golden Cup Icon */}
       <div className="flex flex-row">
       <h1 className="text-3xl font-bold ml-12">Top Student Projects</h1>
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mt-1 px-4 " />
       </div>
        
        <div className="flex items-center space-x-4">
          {/* Create New Project Button */}
          <button className="bg-primary text-white px-4 py-2 rounded-md mr-12 ">
            <Link to="/projectform">
            Add a New Project
            </Link>
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
                  className="w-full h-34 object-cover mb-4 rounded-md"
                />
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">&#9733;</span>
                  <span>{project.ratings}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  {project.description}
                </p>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProjectsPage;
