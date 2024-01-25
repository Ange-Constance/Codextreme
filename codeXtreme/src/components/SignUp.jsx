
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* <div>
        logo and name
      </div> */}
      <form className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;