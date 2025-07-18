import React from "react";
import Home from "./home.jsx";
import About from "./about.jsx";
import Counter from "./pages/Counter.jsx";
import Inputs from "./pages/inputs.jsx";
import { Link, Routes, Route } from "react-router-dom";

function App1() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>|
        <Link to="/counter">Counter</Link>
        <Link to="/inputs">Inputs</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/inputs" element={<Inputs />} />
      </Routes>
    </div>
  );
}

export default App1;
