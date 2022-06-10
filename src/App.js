import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import ViewActor from "./pages/ViewActor";
import ViewShow from "./pages/ViewShow";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<ViewShow />} />
        <Route path="/actor/:id" element={<ViewActor />} />
        <Route path="*" element={<Starred />} />
      </Routes>
    </>
  );
}

export default App;
