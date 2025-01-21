import React, { useState } from "react";
import { Link } from "react-router";
import home from "../icons/home-icon.svg";
import "../styles/App.css";

const UserPage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoIds, setVideoIds] = useState([]);

  //Handles video submits
  const handleVideoSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(new URL(videoUrl).search);
    const videoId = urlParams.get("v");
    if (videoId) {
      setVideoIds([...videoIds, videoId]);
      setVideoUrl("");
    }
  };

  const handleDeleteVideo = (index) => {
    setVideoIds(videoIds.filter((_, i) => i !== index));
  };

  const handleCopyUrl = (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    navigator.clipboard.writeText(url);
    alert("URL copied to clipboard!");
  };

  return (
    <div>
      <div className="top-left-logo">
        <Link to="/">
          <img src={home} alt="Logo" className="logo" />
        </Link>
      </div>
      <h2>User Page</h2>
      <div className="centered-form">
        <form onSubmit={handleVideoSubmit} className="user-form">
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="Enter YouTube URL"
            className="url-input"
          />
          <button type="submit" className="add-video-button">
            Add Video
          </button>
        </form>
      </div>
      <div className="user-grid">
        {videoIds.map((id, index) => (
          <div key={index} className="video-item">
            <iframe
              width="400"
              height="225"
              src={`https://www.youtube.com/embed/${id}`}
              Border="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video player ${index}`}
            ></iframe>

            <div className="user-buttons">
              <button
                onClick={() => handleDeleteVideo(index)}
                className="delete-url-button"
              >
                Delete
              </button>
              <button
                onClick={() => handleCopyUrl(id)}
                className="delete-url-button"
              >
                Copy URL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
