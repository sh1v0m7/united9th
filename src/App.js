// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample card data
  const cards = [
    {
      id: 1,
      src: "https://i.ibb.co/9N8D4QB/2w-X5l1ks-Fr8-HD.jpg",
      title: "Geography: India Size and Location",
      description: "An in-depth look at India's size and geographical location, including key geographical features and boundaries.",
      videoUrl: "https://www.youtube.com/embed/2wX5l1ksFr8?si=yJV3J63EHz0uiWks"
    },
    {
      id: 2,
      src: "https://i.ibb.co/nR9dFD9/GGNN3cl57-DQ-HD.jpg",
      title: "Biology: The Fundamental Unit of Life",
      description: "Explore the fundamental unit of life, including cell structure, functions, and biological significance.",
      videoUrl: "https://www.youtube.com/embed/GGNN3cl57DQ?si=CdJcPZtd3MPWbc7s"
    },
    {
      id: 3,
      src: "https://i.ibb.co/DCxWXRT/pi7-CKZ5-WKp4-HD.jpg",
      title: "Geography: Physical Features of India",
      description: "Detailed examination of India's physical features, including mountains, rivers, and plains.",
      videoUrl: "https://www.youtube.com/embed/pi7CKZ5WKp4?si=LI8EwGtTaZyIfuwV"
    }
  ];

  return (
    <Router>
      <div>
        <Navbar title="United 9th" />
        <Routes>
          <Route path="/" element={<Home selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} cards={cards} />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
