import React from 'react';

const MentorQueryDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Ask Your Queries</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="index.html" className="text-lg hover:text-yellow-100 transition">Home</a></li>
              <li><a href="about.html" className="text-lg hover:text-yellow-100 transition">About</a></li>
              <li><a href="contact.html" className="text-lg hover:text-yellow-100 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Query Submission Form */}
        <div id="submit" className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto border border-yellow-500">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Submit Your Query</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name <i className="fas fa-user text-yellow-500"></i>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email <i className="fas fa-envelope text-yellow-500"></i>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Query <i className="fas fa-comment-dots text-yellow-500"></i>
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="5"
                placeholder="Type your query here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              <i className="fas fa-paper-plane mr-2"></i> Submit Query
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 Query System | All Rights Reserved</p>
          <div className="mt-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MentorQueryDashboard;
