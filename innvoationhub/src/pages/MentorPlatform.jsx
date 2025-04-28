import React, { useState } from 'react';

const MentorPlatform = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedSection, setSelectedSection] = useState('dashboardHome');
  const [confirmedSlot, setConfirmedSlot] = useState('');

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    setShowDashboard(true);
  };

  const showSection = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const submitAnswer = (queryId) => {
    alert(`Answer submitted for query ${queryId}`);
  };

  const confirmSlot = (slot) => {
    setConfirmedSlot(slot);
  };

  const startVideoCall = () => {
    alert('Starting the video call...');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Registration Page */}
      {!showDashboard && (
        <div id="registrationPage" className="min-h-screen flex items-center justify-center">
          <div className="card p-8 w-full max-w-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">Mentor Registration</h2>
            <form id="registrationForm" className="space-y-5" onSubmit={handleRegistrationSubmit}>
              <div>
                <label className="block mb-2 font-semibold">Full Name</label>
                <input type="text" id="mentorNameInput" placeholder="Enter your full name" required className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Professional Email</label>
                <input type="email" required className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Area of Expertise</label>
                <select required className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none">
                  <option disabled selected>Select expertise</option>
                  <option>Startup Strategy</option>
                  <option>Fundraising & Pitching</option>
                  <option>Marketing & Branding</option>
                  <option>Product Development</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Experience Details</label>
                <textarea required className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" rows="4"></textarea>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Short Bio</label>
                <textarea required className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" rows="3"></textarea>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Upload Resume/Portfolio (Optional)</label>
                <input type="file" className="w-full p-2 rounded-lg" />
              </div>
              <button type="submit" className="w-full text-lg">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Dashboard Page */}
      {showDashboard && (
        <div id="dashboardPage" className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="flex justify-between items-center p-6 shadow-lg">
            <div className="text-2xl font-bold flex items-center gap-2">
              <i data-lucide="layout-dashboard" className="w-8 h-8"></i> Dashboard
            </div>
            <div className="space-x-6 flex items-center">
              <button onClick={() => showSection('dashboardHome')} className="hover:underline flex items-center gap-1">Home</button>
              <button onClick={() => showSection('queriesPage')} className="hover:underline flex items-center gap-1">Answer Queries</button>
              <button onClick={() => showSection('browsePage')} className="hover:underline flex items-center gap-1">Browse Startups</button>
              <button onClick={() => showSection('messagesPage')} className="hover:underline flex items-center gap-1">Messages</button>
              <button onClick={() => showSection('videoCallPage')} className="hover:underline flex items-center gap-1">Video Calls</button>
              <button onClick={() => showSection('profilePage')} className="hover:underline flex items-center gap-1">Profile</button>
            </div>
          </nav>

          {/* Dashboard Content */}
          <main className="flex-1 p-8 space-y-12">
            {/* Home */}
            {selectedSection === 'dashboardHome' && (
              <div id="dashboardHome">
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-600">Welcome, Mentor!</h2>
                  <p className="text-gray-600">Start helping new startups grow 🚀</p>
                </section>
              </div>
            )}

            {/* Answer Queries Section */}
            {selectedSection === 'queriesPage' && (
              <div id="queriesPage" className="hidden">
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-600">Answer Queries</h2>
                  <p className="text-gray-700 mb-4">Provide solutions to questions asked by startups</p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="text-xl font-semibold">Query from: Sarah Lee</h3>
                      <p className="text-gray-500 mb-2">What is the best way to market a new product?</p>
                      <textarea id="answer1" placeholder="Write your answer here..." className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" rows="4"></textarea>
                      <button onClick={() => submitAnswer(1)} className="w-full text-lg">Submit Answer</button>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h3 className="text-xl font-semibold">Query from: Michael Green</h3>
                      <p className="text-gray-500 mb-2">How do I build a customer base for my app?</p>
                      <textarea id="answer2" placeholder="Write your answer here..." className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" rows="4"></textarea>
                      <button onClick={() => submitAnswer(2)} className="w-full text-lg">Submit Answer</button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Other Sections (Browse Startups, Messages, etc.) */}
            {/* Implement the other sections similarly */}
            
            {/* Profile Section */}
            {selectedSection === 'profilePage' && (
              <div id="profilePage" className="hidden">
                <section className="card p-6">
                  <h2 className="text-2xl font-bold mb-4 text-orange-600">Profile Management</h2>
                  <p className="text-gray-700 mb-4">Update your personal information, bio, and other details</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 font-semibold">Full Name</label>
                      <input type="text" className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" value="John Doe" />
                    </div>
                    <div>
                      <label className="block mb-2 font-semibold">Email</label>
                      <input type="email" className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" value="john@example.com" />
                    </div>
                    <div>
                      <label className="block mb-2 font-semibold">Short Bio</label>
                      <textarea className="w-full p-3 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none" rows="4">Experienced mentor in product development and marketing.</textarea>
                    </div>
                    <button className="w-full text-lg">Save Changes</button>
                  </div>
                </section>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default MentorPlatform;
