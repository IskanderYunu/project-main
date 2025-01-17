import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
//start functionality on dashboard
import Dashboard from "./components/Dashboard";
import "./styles/App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); //tracks login status
  const [isLogin, setIsLogin] = useState(true); //tracks form type (login/signup)

  const handleLogin = () => {
    setIsAuthenticated(true); //set users as logged in
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); //swtich between lgoin and registration forms
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <div>
          {isLogin ? (
            <div>
              <h2>Login Page</h2>
              <Login onLogin={handleLogin} />
              <button onClick={toggleForm}>Go to Signup</button>
            </div>
          ) : (
            <div>
              <h2>Signup Page</h2>
              <Signup onSignup={handleSignup} />
              <button onClick={toggleForm}>Go to Login</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
