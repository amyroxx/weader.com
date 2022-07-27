import React from "react";
import Weather from "./components/Weather";
import About from "./components/About";
import Social from "./components/Social";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forecast from "./components/Forecast";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/about" element={<About />} />
        <Route path="/social" element={<Social />} />
        <Route path="/Forecast" element={<Forecast />} />

      </Routes>
    </Router>
  );
};
export default App;
