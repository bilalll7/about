import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/index";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
