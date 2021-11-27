import React from "react";
import Home from "./home";
import Contactme from "./contactme";
import Project from "./project";
import Navbar from "./components/navbar";
import Page from "./components/page";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import { Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Link to="/contactme">About</Link>
      <Link to="/">
        <Navbar />
      </Link>
      {/* <Page /> */}
    </Router>
  );
}

export default App;
