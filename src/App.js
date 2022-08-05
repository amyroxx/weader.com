import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Animatedroutes from "./components/Animatedroutes";
import Favicon from "react-favicon"

const App = () => {
  return (
    <Router>
      <div className="main-div">
      <Favicon url="public/favicon.png"></Favicon>
      <Animatedroutes/>
      </div>
    </Router>
  );
};
export default App;
