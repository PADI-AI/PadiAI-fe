import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChatBotPage from './pages/ChatBotPage/ChatBot';
import HRPage from './pages/HRPage/HRPage';
import ManagerPage from './pages/ManagerPage/ManagerPage';
import UserPage from './pages/UserPage/UserPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/chatBot" element={<ChatBotPage />} />
        <Route path="/hr" element={<HRPage />} />
        <Route path="/manager" element={<ManagerPage />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
