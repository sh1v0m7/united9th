// components/Home.js
import React, { useState } from 'react';
import Card from './card'; // Ensure correct case
import VideoPlayer from './VideoPlayer'; // Ensure correct case

const Home = ({ selectedVideo, setSelectedVideo, cards }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  // Filter cards based on search query
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedCard = cards.find(card => card.videoUrl === selectedVideo);

  return (
    <div>
      {selectedVideo ? (
        <VideoPlayer
          videoUrl={selectedVideo}
          title={selectedCard?.title || 'Untitled'}
          description={selectedCard?.description || 'No description available'}
          onBack={() => setSelectedVideo(null)}
        />
      ) : (
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
            />
          </div>
          <div className="cardbox">
            {filteredCards.length > 0 ? (
              filteredCards.map(card => (
                <Card
                  key={card.id}
                  src={card.src}
                  cardtitle={card.title}
                  onClick={() => handleCardClick(card.videoUrl)}
                />
              ))
            ) : (
              <p>No cards found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
