import { Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Project from "./containers/Project/Project";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
