import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Welcome to the home page</h1>;
const About = () => <h1>You are on the about page</h1>;
const Contact = () => <h1>Please feel free to email us</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js
    <div className="App">
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;