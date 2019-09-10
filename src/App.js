import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage/LoginPage.react';
import AdminDashboardContainer from './AdminDashboard/AdminDashboardContainer/AdminDashboardContainer.react';
import DashboardContainer from './Dashboard/DashboardContainer/DashboardContainer.react';
import IncidentDetailsPage from './IncidentDetailsPage/IncidentDetailsPage.react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardContainer/>
       <AdminDashboardContainer/>
      </div>
    );
  }
}

export default App;
