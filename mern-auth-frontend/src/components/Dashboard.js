// components/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard" style={{ backgroundColor: 'white', padding: '20px', minHeight: '100vh' }}>
      <h2>Welcome to the Dashboard</h2>
      <p>Here are some details:</p>
      <ul>
        <li>Detail 1</li>
        <li>Detail 2</li>
        <li>Detail 3</li>
      </ul>
    </div>
  );
};

export default Dashboard;
