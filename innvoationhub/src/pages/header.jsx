import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Make sure Link is imported

const Header = () => {
  const [user, setUser] = useState(null);

  // Check if user is logged in by accessing localStorage
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userRole = localStorage.getItem("role"); // You can use the role or other info
    const user = JSON.parse(localStorage.getItem("user")); // Retrieve user info from localStorage
    console.log(user);

    if (accessToken && user) {
      // Optionally, fetch user data from the server if you want more details
      setUser(user); // If user is available, set it in state
    }
  }, []);

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    localStorage.removeItem("user"); // Remove the user data as well
    setUser(null); // Update state to reflect the user is logged out
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-orange-500">Visionary-Hub</div>

        <nav>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/querry"
                className="hover:text-orange-500 transition-colors"
              >
                Our Resources
              </Link>
            </li>
            <li>
              <Link
                to="/talk"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </li>
            {/* New Menu Items */}
            <li>
              <Link
                to="/MentorQuerySystem"
                className="hover:text-orange-500 transition-colors"
              >
                Mentor Query System
              </Link>
            </li>
            <li>
              <Link
                to="/MentorPlatform"
                className="hover:text-orange-500 transition-colors"
              >
                Mentor Platform
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            {/* Conditionally render the Login/Signup or User's name and Logout */}
            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="hover:text-orange-500 transition-colors"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-orange-500">Welcome, {user.fullName}</li>{" "}
                {/* Display username (fullName) */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-orange-500 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
