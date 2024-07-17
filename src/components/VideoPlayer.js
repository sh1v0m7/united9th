import React from 'react';
import PropTypes from 'prop-types';
import '../ui/VideoPlayer.css'; // Import styling

const VideoPlayer = ({ videoUrl, title, description, onBack, recommendedVideos }) => {
  return (
    <div className="video-player">
      <button 
        className="back-button" 
        onClick={onBack} 
        aria-label="Back to Videos"
      >
        Back to Videos
      </button>
      <div className="video-container">
        <iframe 
          src={videoUrl} 
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
      <div className="video-info">
        {title && <h2 className="video-title">{title}</h2>}
        {description && <p className="video-description">{description}</p>}
      </div>
      {recommendedVideos && recommendedVideos.length > 0 && (
        <div className="recommendations">
          <h3>Recommended Videos</h3>
          <ul className="recommendation-list">
            {recommendedVideos.map((video) => (
              <li key={video.id} className="recommendation-item">
                <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                  <img src={video.src} alt={video.title} className="recommendation-thumbnail" />
                  <p className="recommendation-title">{video.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Define prop types for the component
VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onBack: PropTypes.func.isRequired,
  recommendedVideos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      videoUrl: PropTypes.string.isRequired,
    })
  ),
};

export default VideoPlayer;
