import React from "react";
import Weather from "./Weather";
import About from "./About";
import { Routes, Route, useLocation } from "react-router-dom";
import Forecast from "./Forecast";
import Firstchild from "./children/Firstchild";
import Secondchild from "./children/Secondchild"
import Thirdchild from "./children/Thirdchild"
import Fourthchild from "./children/Fourthchild"
import Notes from "./Notes"

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const Animatedroutes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
          <Navbar/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/Forecast" element={<Forecast />}>
            <Route path="/Forecast/1" element={<Firstchild/>}></Route>
            <Route path="/Forecast/2" element={<Secondchild/>}></Route>
            <Route path="/Forecast/3" element={<Thirdchild/>}></Route>
            <Route path="/Forecast/4" element={<Fourthchild/>}></Route>
            </Route>   
            <Route to="/notes" element={<Notes/>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Animatedroutes;
