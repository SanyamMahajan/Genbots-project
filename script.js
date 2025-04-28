// API Configuration
const API_BASE_URL = 'http://localhost:8000/api/v1';

// Utility Functions
const getAuthToken = () => localStorage.getItem('accessToken');
const setAuthToken = (token) => localStorage.setItem('accessToken', token);
const removeAuthToken = () => localStorage.removeItem('accessToken');

// API Request Helper
async function apiRequest(endpoint, options = {}) {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// User Authentication
async function login(email, password) {
  try {
    const response = await apiRequest('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });

    setAuthToken(response.data.accessToken);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    return response;
  } catch (error) {
    throw error;
  }
}

async function register(userData) {
  try {
    const formData = new FormData();
    Object.keys(userData).forEach(key => {
      formData.append(key, userData[key]);
    });

    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      body: formData
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Registration failed');
    return data;
  } catch (error) {
    throw error;
  }
}

// Query Management
async function submitQuery(queryData) {
  return apiRequest('/queries', {
    method: 'POST',
    body: JSON.stringify(queryData)
  });
}

async function getQueries() {
  return apiRequest('/queries');
}

async function getQueryById(queryId) {
  return apiRequest(`/queries/${queryId}`);
}

async function updateQuery(queryId, queryData) {
  return apiRequest(`/queries/${queryId}`, {
    method: 'PUT',
    body: JSON.stringify(queryData)
  });
}

async function deleteQuery(queryId) {
  return apiRequest(`/queries/${queryId}`, {
    method: 'DELETE'
  });
}

async function addResponse(queryId, content) {
  return apiRequest(`/queries/${queryId}/responses`, {
    method: 'POST',
    body: JSON.stringify({ content })
  });
}

// Mentor Management
async function getMentors() {
  return apiRequest('/mentors');
}

async function getMentorById(mentorId) {
  return apiRequest(`/mentors/${mentorId}`);
}

async function createMentor(mentorData) {
  return apiRequest('/mentors', {
    method: 'POST',
    body: JSON.stringify(mentorData)
  });
}

async function updateMentor(mentorId, mentorData) {
  return apiRequest(`/mentors/${mentorId}`, {
    method: 'PUT',
    body: JSON.stringify(mentorData)
  });
}

async function deleteMentor(mentorId) {
  return apiRequest(`/mentors/${mentorId}`, {
    method: 'DELETE'
  });
}

async function bookMentorSession(mentorId, sessionData) {
  return apiRequest(`/mentors/${mentorId}/sessions`, {
    method: 'POST',
    body: JSON.stringify(sessionData)
  });
}

// Patent Services
async function submitPatentRequest(patentData) {
  return apiRequest('/patents', {
    method: 'POST',
    body: JSON.stringify(patentData)
  });
}

async function getPatents() {
  return apiRequest('/patents');
}

async function getPatentById(patentId) {
  return apiRequest(`/patents/${patentId}`);
}

async function updatePatent(patentId, patentData) {
  return apiRequest(`/patents/${patentId}`, {
    method: 'PUT',
    body: JSON.stringify(patentData)
  });
}

async function deletePatent(patentId) {
  return apiRequest(`/patents/${patentId}`, {
    method: 'DELETE'
  });
}

async function addPatentComment(patentId, content) {
  return apiRequest(`/patents/${patentId}/comments`, {
    method: 'POST',
    body: JSON.stringify({ content })
  });
}

async function updatePatentStatus(patentId, status) {
  return apiRequest(`/patents/${patentId}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
}

// UI Event Handlers
document.addEventListener("DOMContentLoaded", () => {
  // Check for accessToken and user from localStorage
  const accessToken = localStorage.getItem("accessToken");
  const userData = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");

  // Check if user is logged in and update navigation
  if (accessToken && userData) {
    // Update navigation bar for logged-in users
    const navLinks = document.querySelector(".nav-links ul");
    navLinks.innerHTML = `
      <li><a href="index.html">Home</a></li>
      <li><a href="querry.html">Our Resources</a></li>
      <li><a href="talk.html">About</a></li>
      <li><a href="#" id="user-profile" class="font-semibold text-red-600">${userData.username}</a></li>
      <li><a href="#" id="logout" class="text-gray-600 hover:text-red-600">Logout</a></li>
    `;

    // Add logout functionality
    document.getElementById("logout").addEventListener("click", handleLogout);
  }

  // Handle form submissions
  handleFormSubmissions();
});

// Handle form submissions
function handleFormSubmissions() {
  // Login Form
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      try {
        await login(email, password);
        window.location.href = "index.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Register Form
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(registerForm);
      try {
        await register(Object.fromEntries(formData));
        window.location.href = "login.html";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Query Form
  const queryForm = document.getElementById("query-form");
  if (queryForm) {
    queryForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(queryForm);
      try {
        await submitQuery(Object.fromEntries(formData));
        alert("Query submitted successfully!");
        queryForm.reset();
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // Patent Form
  const patentForm = document.getElementById("patent-form");
  if (patentForm) {
    patentForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const formData = new FormData(patentForm);
      try {
        await submitPatentRequest(Object.fromEntries(formData));
        alert("Patent request submitted successfully!");
        patentForm.reset();
      } catch (error) {
        alert(error.message);
      }
    });
  }
}

// Logout function
function handleLogout() {
  removeAuthToken();
  localStorage.removeItem("user");
  localStorage.removeItem("role");
  window.location.href = "index.html";
}

// Export functions for use in other scripts
window.api = {
  login,
  register,
  submitQuery,
  getQueries,
  getQueryById,
  updateQuery,
  deleteQuery,
  addResponse,
  getMentors,
  getMentorById,
  createMentor,
  updateMentor,
  deleteMentor,
  bookMentorSession,
  submitPatentRequest,
  getPatents,
  getPatentById,
  updatePatent,
  deletePatent,
  addPatentComment,
  updatePatentStatus,
  handleLogout
};
