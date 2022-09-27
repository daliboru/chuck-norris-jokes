import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RandomJoke from "./components/RandomJoke";
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Categories />} exact />
          <Route path="/:jokeCategory" element={<RandomJoke />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
