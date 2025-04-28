import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './pages/header';
import Footer from './pages/footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import MentorQuerySystem from './pages/MentorQuerySystem';
import MentorPlatform from './pages/MentorPlatform';
import PatentConsultancy from './pages/PatentConsultancy';
import MentorQueryDashboard from './pages/MentorQueryDashboard'; 
import TalkToMentor from './pages/TalkToMentor';
import LearningResources from './pages/LearningResources';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/MentorQuerySystem" element={<MentorQuerySystem />} />
          <Route path="/MentorPlatform" element={<MentorPlatform />} />
          <Route path="/PatentConsultancy" element={<PatentConsultancy />} />
          <Route path="/MentorQueryDashboard" element={<MentorQueryDashboard />} />
          <Route path="/TalkToMentor" element={<TalkToMentor />} />
          <Route path="/LearningResources" element={<LearningResources />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
