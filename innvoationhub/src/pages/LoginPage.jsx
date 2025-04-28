import React, { useState, useEffect } from "react";
import apiClient from "../ApiClient/apiClient"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
    avatar: null,
    coverImage: null,
  });
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  // Check if user is already logged in, redirect if found
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    if (accessToken && user) {
      navigate("/"); // Redirect to home if logged in
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Sending login request using apiClient
      const response = await apiClient.post("/users/login", {
        email: formData.email,
        password: formData.password,
      });

      // Store the tokens and role in localStorage or sessionStorage
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("refreshToken", response.data.data.refreshToken);
      localStorage.setItem("role", response.data.data.role); // Store role for future use
      localStorage.setItem("user", JSON.stringify(response.data.data.user)); // Store user data

      alert("Login Successful!");
      navigate("/"); // Redirect to the home page or dashboard after successful login
    } catch (error) {
      alert(error.message || "Login Failed");
      console.error("Login error:", error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const signupData = new FormData();
      signupData.append("fullName", formData.fullName); // Adjusted to match state variable
      signupData.append("username", formData.username);
      signupData.append("email", formData.email);
      signupData.append("password", formData.password);
      if (formData.avatar) signupData.append("avatar", formData.avatar);
      if (formData.coverImage)
        signupData.append("coverImage", formData.coverImage);

      // Sending multipart data using Axios
      const response = await apiClient.post("/users/register", signupData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const data = response.data.data;
      if (response.status === 200) {
        // Assuming the response includes accessToken, refreshToken, and role
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("role", data.role); // Store the role

        alert("Signup Successful!");
        console.log(data);
      } else {
        alert(data.message || "Signup Failed");
      }
    } catch (error) {
      alert("Signup error:", error.message || "An error occurred during signup");
      console.error("Signup error:", error);
    }
  };

  return (
    <section className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Visionary Hub</h2>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setFormType("login")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            formType === "login"
              ? "bg-red-600 hover:bg-red-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setFormType("signup")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            formType === "signup"
              ? "bg-red-600 hover:bg-red-500"
              : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          Signup
        </button>
      </div>

      {formType === "login" ? (
        <div>
          <h3 className="text-xl font-semibold text-center mb-4">Login</h3>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 py-2 rounded-lg font-semibold transition"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold text-center mb-4">Signup</h3>
          <form
            onSubmit={handleSignup}
            encType="multipart/form-data"
            className="space-y-4"
          >
            <div>
              <label htmlFor="fullname" className="block text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullName" // Updated to match the state variable
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="signup-email"
                className="block text-sm font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="signup-password"
                className="block text-sm font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                required
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label htmlFor="avatar" className="block text-sm font-semibold">
                Avatar (Profile Photo)
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="coverImage"
                className="block text-sm font-semibold"
              >
                Cover Image
              </label>
              <input
                type="file"
                id="coverImage"
                name="coverImage"
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-gray-600 text-white border border-gray-500 focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-500 py-2 rounded-lg font-semibold transition"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default LoginPage;
