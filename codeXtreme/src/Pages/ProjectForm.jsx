import React, { useState } from 'react';
import Nav from '../components/Nav';
const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectCategory: '',
    projectLocation: '',
    projectStartDate: '',
    projectEndDate: '',
    projectBudget: '',
    // Add more form fields as needed
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const submitForm = () => {
    // Perform submission logic here
    console.log('Form submitted:', formData);
    // You can send the formData to your server or take any other actions
  };

  const renderIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5 inline-block"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );

  return (
    <div>
      <Nav/>
    <div className='mt-[100px]'>
    <div className="max-w-xl mx-auto p-8 bg-white rounded-md shadow-md ">
      {currentStep === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 1: Project Details</h2>
          {/* Render form fields for Step 1 */}
          <label className="block mb-4">
            Project Name
            <input
              type="text"
              name="projectName"
              placeholder="Enter project name"
              value={formData.projectName}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          <label className="block mb-4">
            Project Description
            <textarea
              name="projectDescription"
              placeholder="Enter project description"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          <label className="block mb-4">
            Project Category
            <input
              type="text"
              name="projectCategory"
              placeholder="Enter project category"
              value={formData.projectCategory}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          <button onClick={nextStep} className="bg-primary text-white px-4 py-2 rounded-md">
            Next {renderIcon()}
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <div >
          <h2 className="text-2xl font-bold mb-4">Step 2: Project Dates</h2>
          {/* Render form fields for Step 2 */}
          <label className="block mb-4">
            Project Start Date
            <input
              type="date"
              name="projectStartDate"
              placeholder="Select start date"
              value={formData.projectStartDate}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          <label className="block mb-4">
            Project End Date
            <input
              type="date"
              name="projectEndDate"
              placeholder="Select end date"
              value={formData.projectEndDate}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          <button onClick={prevStep} className="mr-4 bg-gray-500 text-white px-4 py-2 rounded-md">
            Previous
          </button>
          <button onClick={nextStep} className="bg-primary text-white px-4 py-2 rounded-md">
            Next {renderIcon()}
          </button>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Step 3: Project Budget</h2>
          {/* Render form fields for Step 3 */}
          <label className="block mb-4">
            Project Budget
            <input
              type="number"
              name="projectBudget"
              placeholder="Enter project budget"
              value={formData.projectBudget}
              onChange={handleInputChange}
              className="border p-2 w-full mt-1"
            />
          </label>

          {/* Add more form fields as needed */}

          <button onClick={prevStep} className="mr-4 bg-gray-500 text-white px-4 py-2 rounded-md">
            Previous
          </button>
          <button onClick={submitForm} className="bg-green-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      )}
    </div>
    </div>
    </div>
   
  );
};

export default ProjectForm;
