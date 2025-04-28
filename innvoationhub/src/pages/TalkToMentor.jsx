import React, { useState } from 'react';

const TalkToMentor = () => {
  const [selectedMentor, setSelectedMentor] = useState('');
  const [showBooking, setShowBooking] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showCall, setShowCall] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    'John Doe: Hi! How can I help you today?',
    'You: I need advice on funding my startup.',
    'John Doe: I\'d be happy to help. Let\'s discuss the details.',
  ]);
  const [chatInput, setChatInput] = useState('');

  const chooseMentor = (mentorName) => {
    setSelectedMentor(mentorName);
    setShowBooking(true);
    setShowChat(false);
    setShowCall(false);
  };

  const startChat = () => {
    setShowChat(true);
    setShowBooking(false);
    setShowCall(false);
  };

  const bookCall = () => {
    setShowCall(true);
    setShowBooking(false);
    setShowChat(false);
  };

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([
        ...chatMessages,
        `You: ${chatInput}`,
      ]);
      setChatInput('');
    }
  };

  const confirmCallBooking = () => {
    alert("Your call has been booked!");
    setShowCall(false);
    setShowBooking(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold">Talk to Mentor</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-12">
        {/* Mentor Selection Section */}
        <section className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto mb-12 border border-yellow-500">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Choose Your Mentor</h2>
          <p className="text-gray-600 mb-6 text-center">Select a mentor and proceed to booking a session.</p>

          {/* Mentor List */}
          <div className="space-y-6">
            {['John Doe', 'Jane Smith', 'Alice Johnson'].map((mentor) => (
              <div key={mentor} className="bg-white p-6 rounded-xl shadow border border-yellow-500">
                <h3 className="text-xl font-semibold text-gray-800">Mentor: {mentor}</h3>
                <p className="text-gray-600">Expert in {mentor === 'John Doe' ? 'Startup Strategy and Fundraising' : mentor === 'Jane Smith' ? 'Marketing & Branding' : 'Business Development & Networking'}</p>
                <button
                  onClick={() => chooseMentor(mentor)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 mt-4 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Choose Mentor
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Section */}
        {showBooking && (
          <section className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto mb-12 border border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Booking Session</h2>
            <p className="text-gray-600 text-center mb-6">You have selected <span className="font-semibold">{selectedMentor}</span> for a consultation.</p>

            <div className="space-y-6">
              <button
                onClick={startChat}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Start Chat
              </button>
              <button
                onClick={bookCall}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
              >
                Book a Call
              </button>
            </div>
          </section>
        )}

        {/* Chat Section */}
        {showChat && (
          <section className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto mb-12 border border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Chat with <span className="font-semibold">{selectedMentor}</span></h2>
            <div className="bg-white p-4 h-48 overflow-y-scroll rounded-lg shadow mb-4 text-gray-700 border border-yellow-500">
              {chatMessages.map((message, index) => (
                <div key={index} className="mb-2">{message}</div>
              ))}
            </div>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <button
              onClick={sendMessage}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </section>
        )}

        {/* Call Booking Section */}
        {showCall && (
          <section className="bg-white p-8 shadow-2xl rounded-2xl max-w-3xl mx-auto mb-12 border border-yellow-500">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Book a Call with <span className="font-semibold">{selectedMentor}</span></h2>
            <p className="text-gray-600 text-center mb-6">Select a date and time for your call.</p>
            <input
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            />
            <button
              onClick={confirmCallBooking}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Confirm Call
            </button>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-6">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2025 Query System | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default TalkToMentor;
