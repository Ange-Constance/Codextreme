import React, { useState } from 'react';
import Nav from '../components/Nav';
import { FaPen } from 'react-icons/fa';

const PreferencesPage = () => {
  const [activeSection, setActiveSection] = useState('account');

  const user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    profilePicture: 'https://placekitten.com/80/80',
    notificationPreferences: true,
    studentProfile: {
      isStudent: true,
      schoolName: '',
      location: '',
      startDate: '',
      endDate: '',
      studentIdCard: null,
      isSubmitted: false,
    },
    investorProfile: {
      isInvestor: true,
      investorType: 'individual',
      isPublic: true,
    },
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: checked,
    }));
  };

  const handleStudentFileChange = (e) => {
    const { name, files } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      studentProfile: {
        ...prevUser.studentProfile,
        [name]: files[0],
      },
    }));
  };

  const handleInvestorToggle = () => {
    setUser((prevUser) => ({
      ...prevUser,
      investorProfile: {
        ...prevUser.investorProfile,
        isInvestor: !prevUser.investorProfile.isInvestor,
      },
    }));
  };

  const handleInvestorTypeChange = (e) => {
    const { value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      investorProfile: {
        ...prevUser.investorProfile,
        investorType: value,
      },
    }));
  };

  const handlePublicToggle = () => {
    setUser((prevUser) => ({
      ...prevUser,
      investorProfile: {
        ...prevUser.investorProfile,
        isPublic: !prevUser.investorProfile.isPublic,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(user);
  };

  return (
    <div className='font-primary'>
      <Nav />
      <div className="max-w-3xl mx-auto p-8 mt-24">

      <div className='mb-4'>
      <div className="relative ">
     <img className="w-32 h-32 rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwwfDB8fHww" alt=""/>
    {/* <span className="bottom-0 left-20 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-400 rounded-full"></span> */}
    <FaPen  
    className='bottom-0 left-20 absolute bg-white p-2 w-8 h-8 rounded-md border-2'
    />
     </div>
     </div>

      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

        {/* Section Tabs */}
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => handleSectionChange('account')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'account' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Account Settings
          </button>
          <button
            onClick={() => handleSectionChange('student')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'student' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Student Settings
          </button>
          <button
            onClick={() => handleSectionChange('investor')}
            className={`px-4 py-2 rounded-md ${
              activeSection === 'investor' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            Investor Profile
          </button>
        </div>

        {/* Account Settings */}
        {activeSection === 'account' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={user.fullName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                readOnly
                className="mt-1 p-2 w-full border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
           
            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md">
              Save Changes
            </button>

          </form>
        )}

        {/* Student Settings */}
        {activeSection === 'student' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                <input
                  type="checkbox"
                  name="studentProfile.isStudent"
                  checked={user.studentProfile.isStudent}
                  onChange={handleCheckboxChange}
                  className="mr-2 "
                />
                Set My Student Profile
              </label>
            </div>
            {user.studentProfile.isStudent && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">School Name</label>
                  <input
                    type="text"
                    name="studentProfile.schoolName"
                    value={user.studentProfile.schoolName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                {/* ... (Other student settings fields) ... */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Start Date</label>
                  <input
                    type="text"
                    name="studentProfile.startDate"
                    value={user.studentProfile.startDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">End Date</label>
                  <input
                    type="text"
                    name="studentProfile.endDate"
                    value={user.studentProfile.endDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Student ID Card</label>
                  <input
                    type="file"
                    name="studentProfile.studentIdCard"
                    onChange={handleStudentFileChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </>
            )}

            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md">
              Save Changes
            </button>
          </form>
        )}

        {/* Investor Profile */}
        {activeSection === 'investor' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                <input
                  type="checkbox"
                  name="investorProfile.isInvestor"
                  checked={user.investorProfile.isInvestor}
                  onChange={handleInvestorToggle}
                  className="mr-2"
                />
                Set My Investor Profile
              </label>
            </div>
            {user.investorProfile.isInvestor && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Investor Type</label>
                  <select
                    name="investorProfile.investorType"
                    value={user.investorProfile.investorType}
                    onChange={handleInvestorTypeChange}
                    className="mt-1 p-2 w-full border rounded-md"
                  >
                    <option value="individual">Individual</option>
                    <option value="company">Company</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-600">Display on Public Profile</label>
                  <label className="flex items-center mt-1">
                    <input
                      type="checkbox"
                      name="investorProfile.isPublic"
                      checked={user.investorProfile.isPublic}
                      onChange={handlePublicToggle}
                      className="mr-2"
                    />
                    Display my investor status on public profile
                  </label>
                </div>
              </>
            )}

            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-md">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PreferencesPage;
