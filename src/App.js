import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loging from './loging/Welcome';
import Home from './components/Home';
import Books from './components/Books';
import Students from './components/Student';
import Metaphors from './components/Metaphors';
import Profile from './components/Profile';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/books" element={<Books />} />
        <Route path="/home/student" element={<Students />} />
        <Route path="/home/metaphors" element={<Metaphors />} />
        <Route path="/home/Profile" element={<Profile/>} />
       </Routes>
    </Router>
  );
};

export default App;