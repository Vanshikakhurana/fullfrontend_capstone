import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './components/IntroPage';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import PublishPage from './components/PublishPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/publish" element={<PublishPage />} />
      </Routes>
    </Router>
  );
}

export default App;
