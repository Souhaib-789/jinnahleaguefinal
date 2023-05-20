import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import About from "./screens/About/About";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
         {/*  <Route path="cart" element={<Cart />} />
        <Route path="*" element={<p>Path not resolved</p>} /> */}
    </Routes>
</Router>
  );
}

export default App;
