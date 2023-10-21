import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing-page/LandingPage";
import { Login, SignUp } from "./Routes";



export default function App() {
  return (
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
         </Routes>
      </BrowserRouter>
  );
}
