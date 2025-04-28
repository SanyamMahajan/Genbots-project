import React from 'react';

const LearningResources = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Learning Resources</h1>
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
        {/* Learning Resource Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Startup Guide */}
          <div className="bg-white border-2 border-yellow-500 p-6 rounded-2xl shadow-2xl text-center">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Startup Guide</h3>
            <p className="text-gray-600 text-sm mb-4">A comprehensive guide to help you understand the fundamental steps in starting your business, from idea validation to scaling up.</p>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 font-bold">Read Guide →</a>
          </div>

          {/* Business Plan Statement */}
          <div className="bg-white border-2 border-yellow-500 p-6 rounded-2xl shadow-2xl text-center">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Business Plan Statement</h3>
            <p className="text-gray-600 text-sm mb-4">Learn how to create an effective business plan that highlights your vision, target market, and growth strategy.</p>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 font-bold">Learn More →</a>
          </div>

          {/* Funding Strategies */}
          <div className="bg-white border-2 border-yellow-500 p-6 rounded-2xl shadow-2xl text-center">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Funding Strategies</h3>
            <p className="text-gray-600 text-sm mb-4">Understand various funding options available for your startup, including bootstrapping, venture capital, and angel investors.</p>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 font-bold">Explore Funding →</a>
          </div>

          {/* Case Studies */}
          <div className="bg-white border-2 border-yellow-500 p-6 rounded-2xl shadow-2xl text-center">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Case Studies</h3>
            <p className="text-gray-600 text-sm mb-4">Real-world case studies from successful startups to inspire and guide you through common challenges and effective solutions.</p>
            <a href="#" className="text-yellow-500 hover:text-yellow-600 font-bold">Read Case Studies →</a>
          </div>

        </section>

        {/* Back to Home Button */}
        <div className="mt-12 flex justify-center">
          <a href="index.html">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
              ← Back to Home
            </button>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 Mentor Resources | All Rights Reserved</p>
          <div className="mt-4">
            <a href="https://www.facebook.com" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.twitter.com" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-gray-300 hover:text-white mx-2">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningResources;
