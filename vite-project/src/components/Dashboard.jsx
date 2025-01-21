import React, { useState } from "react";
import { Link } from "react-router";
import home from "../icons/home-icon.svg";
import searchIcon from "../icons/search-icon.svg";
import "../styles/App.css";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // search logic here
    console.log("Search Query:", searchQuery);
  };

  return (
    <div>
      <div className="top-left-logo">
        <Link to="/">
          <img src={home} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="top-right-buttons">
        <Link to="/login">
          <button className="small-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="small-button">Sign up</button>
        </Link>
        <Link to="/user">
          <button className="small-button">User Page</button>
        </Link>
      </div>
      <h2>Welcome Page</h2>
      <div className="main-box">
        <h3>Explore</h3>
        {/* Add your video list or other content here */}
      </div>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ backgroundImage: `url(${searchIcon})` }} // Adds search icon
          />
        </form>
      </div>
      <div className="discover">
        <h3>Discover</h3>
        <div className="video-grid">
          {/* Placeholder for VIDEO */}
          <div className="video-placeholder">Video Sample</div>
          <div className="video-placeholder">Video Sample</div>
          <div className="video-placeholder">Video Sample</div>
          <div className="video-placeholder">Video Sample</div>
          <div className="video-placeholder">Video Sample</div>
        </div>
      </div>
      <div className="playlist">
        <h3>Trending Playlists</h3>
        <div className="video-grid">
          {/* Placeholder for VIDEO */}
          <div className="video-placeholder">Playlist Sample</div>
          <div className="video-placeholder">Playlist Sample</div>
          <div className="video-placeholder">Playlist Sample</div>
          <div className="video-placeholder">Playlist Sample</div>
          <div className="video-placeholder">Playlist Sample</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
