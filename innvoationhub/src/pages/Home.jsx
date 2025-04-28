import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaFacebook, FaXTwitter } from 'react-icons/fa6';
import call from '/call.jpg';
import querry from '/querry.jpg';
import talk from '/talk.jpg';

const Home = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('User');

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRole = localStorage.getItem("role");

    if (accessToken && storedUser) {
      setUser(storedUser);
      if (storedRole) {
        setRole(storedRole);
      }
    }
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="bg-orange-400 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            Welcome, <span id="username">{user ? user.fullName : 'Guest'}</span> (<span id="userRole">{role}</span>)
          </h1>
          <p className="text-xl mb-8">Get answers to your queries and connect with mentors!</p>
          <Link
            to="/querry"
            className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
          >
            Submit Your Query
          </Link>
        </div>
      </section>

      {/* Our Resources */}
      <section id="recognition" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="p-6 shadow-lg rounded-lg text-center bg-white">
              <img src={querry} alt="Ask Queries" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold mb-2">Ask Your Queries</h3>
              <p className="mb-4">Users can ask queries easily.</p>
              <Link to="/MentorQueryDashboard" className="text-orange-500 font-semibold hover:underline">
                Query
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-6 shadow-lg rounded-lg text-center bg-white">
              <img src={talk} alt="Talk with Mentor" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold mb-2">Talk with Mentor</h3>
              <p className="mb-4">Book a slot and talk directly with a mentor.</p>
              <Link to="/TalkToMentor" className="text-orange-500 font-semibold hover:underline">
                Book Your Slot
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-6 shadow-lg rounded-lg text-center bg-white">
              <img src={call} alt="Video Call" className="mx-auto mb-4 h-20" />
              <h3 className="text-xl font-semibold mb-2">Video Call with Mentor</h3>
              <p className="mb-4">One-on-one interaction with mentors through video call.</p>
              <Link to="/login" className="text-orange-500 font-semibold hover:underline">
                Book Your Slot
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed mb-6">
              Welcome to VisionaryHub, where dreams meet opportunities. We are a passionate community dedicated to connecting creators, learners, mentors, and investors from all walks of life.
              Our vision is simple yet powerful — to build a platform where ideas are nurtured, skills are polished, and success stories are created every day.
            </p>
            <Link to="/login" className="text-orange-500 font-semibold hover:underline">Know More ➔</Link>
          </div>
        </div>
      </section>

      {/* Complementary Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complementary Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="p-6 shadow-lg rounded-lg text-center bg-white">
              <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
              <p className="mb-4">Designed to inspire, educate, and accelerate your growth.</p>
              <Link to="/login" className="text-orange-500 font-semibold hover:underline">Know More</Link>
            </div>

            {/* Card 2 */}
            <div className="p-6 shadow-lg rounded-lg text-center bg-white">
              <h3 className="text-xl font-semibold mb-2">Patent Consultancy</h3>
              <p className="mb-4">Get expert guidance to protect and commercialize your ideas.</p>
              <Link to="/PatentConsultancy" className="text-orange-500 font-semibold hover:underline">
                Know More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-orange-500 h-10 w-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-orange-500 h-10 w-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-orange-500 h-10 w-10 hover:scale-110 transition-transform" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-orange-500 h-10 w-10 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
