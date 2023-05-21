import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Home from './screens/Home/Home'
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Login from "./screens/Login/Login";
import { Toaster } from "react-hot-toast";
import Signup from "./screens/Signup/Signup";

function App() {
  return (
    <Router>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route element={<ProtectedRoutes />}>
          
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='*' element={<h1 style={{ textAlign: 'center' }}>PAGE NOT FOUND</h1>} />

      </Routes>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
</Router>
  );
}

export default App;
