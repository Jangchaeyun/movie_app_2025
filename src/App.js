import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </HashRouter>
  );
}

export default App;
