import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Animatedroutes from "./components/Animatedroutes";
import Favicon from "react-favicon"

const App = () => {
  return (
    <Router>
      <Favicon url="public/favicon.png"></Favicon>
      <Animatedroutes/>
    </Router>
  );
};
export default App;
