import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactme from "./contactme";
import Project from "./project";
// import * as serviceWorker from "./serviceWorker";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contactme" element={<Contactme />} />
      <Route path="project" element={<Project />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
// serviceWorker.unregister();
