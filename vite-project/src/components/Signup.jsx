import React, { useState } from "react";
import { Link } from "react-router";
import home from "../icons/home-icon.svg";
import "../styles/App.css";

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { username, email, password, grade });
  };

  return (
    <div>
      <div className="centered-form">
        <div className="top-left-logo">
          <Link to="/">
            <img src={home} alt="Logo" className="logo" />
          </Link>
        </div>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Select Grade Level:</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Select Grade</option>
              <option value="K">K</option>
              <option value="1">1st Grade</option>
              <option value="2">2nd Grade</option>
              <option value="3">3rd Grade</option>
              <option value="4">4th Grade</option>
              <option value="5">5th Grade</option>
            </select>
          </div>
          <br></br>

          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
