// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // Import Dashboard component

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here if needed
    alert(`Logged in as: ${formData.username}`);
    navigate('/dashboard'); // Navigate to the dashboard after successful login
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <center>
        <h2 className="login-header">Login</h2>
      </center>
      <input
        className="form-input"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        className="form-input"
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button className="submit-button" type="submit">Submit</button>
      <p>
        <Link to="/components/register">Register Here</Link>
      </p>
    </form>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/components/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
