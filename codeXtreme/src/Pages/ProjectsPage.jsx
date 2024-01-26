// src/components/BestProjectsPage.js
import Image from "../assets/vr-lenses.png";
import React, { useState } from 'react';
import Nav from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const projectsData = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1558137623-ce933996c730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D', // Replace with your image URL
        title: 'Revolutionary Music Platform',
        date: 'January 1, 2022',
        ratings: 4.5,
        description: 'A groundbreaking project that revolutionizes the music industry with innovative features and cutting-edge technology.',
        link: 'https://example.com/project1',
        investors: 21,
      },

      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image URL
        title: 'Green Bio',
        date: 'February 15, 2022',
        ratings: 4.2,
        description: 'An innovative solution to grow crops in controlled environment using tech.',
        link: 'https://example.com/project6',
        investors: 3,
      },      
      
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1629248242720-b2bd62344725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D', // Replace with your image URL
        title: 'Health Monitoring Device',
        date: 'February 15, 2022',
        ratings: 4.2,
        description: 'An innovative solution to monitor health metrics, providing individuals with real-time data for better well-being.',
        link: 'https://example.com/project3',
        investors: 8,
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1677627004049-e028e214a388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzYyfHxyb2JvdGljc3xlbnwwfDB8MHx8fDA%3D', // Replace with your image URL
        title: 'Renewable Energy Project',
        date: 'February 15, 2022',
        ratings: 4.2,
        description: 'An innovative solution to harness renewable energy sources, contributing to a sustainable and eco-friendly future.',
        link: 'https://example.com/project4',
        investors: 15,
      },
      {
        id: 5,
        image: 'https://plus.unsplash.com/premium_photo-1680509034814-e733c5f873ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9ib3RpY3N8ZW58MHwwfDB8fHww', // Replace with your image URL
        title: 'Smart Agriculture System',
        date: 'February 15, 2022',
        ratings: 4.2,
        description: 'An innovative solution to revolutionize agriculture practices, optimize resource usage, and improve crop yields.',
        link: 'https://example.com/project2',
        investors: 13,
      },
      
      {
        id: 6,
        image: 'https://plus.unsplash.com/premium_photo-1682464548420-a93d73c5ec89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHJvYm90aWNzfGVufDB8MHwwfHx8MA%3D%3D', // Replace with your image URL
        title: 'Blockchain-Based Marketplace',
        date: 'February 15, 2022',
        ratings: 4.2,
        description: 'An innovative solution to create a secure and decentralized marketplace using blockchain technology.',
        link: 'https://example.com/project6',
        investors: 3,
      }
      

];

const ProjectsPage = () => {

  const numRows = Math.ceil(projectsData.length / 3);

  return (
    <div className="font-primary">
    <Nav />
    <div className="p-2 mt-28 ">
      {/* Title and Search Bar */}
      <div className="flex justify-between items-center mb-8">
        {/* Golden Cup Icon */}
       <div className="flex flex-row">
       <h1 className="text-3xl font-bold ml-12">Top Student Projects</h1>
        <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-3xl mt-1 px-4 " />
       </div>
        
        <div className="flex items-center space-x-4">
        <Link to="/projectform">
          <button className="bg-primary text-white px-4 py-2 rounded-md mr-12 ">
            <Link to="/projectform">
            + Add a New Project
            </Link>
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
                <Link to="/projectdescription" className="text-blue-500 hover:underline mb-2">             
                  Visit Project
                </Link>
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
