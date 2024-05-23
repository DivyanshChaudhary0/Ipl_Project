import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MatchDetails from "./Components/MatchDetails";
import Navbar from "./Components/Navbar";
import PointsTable from "./Components/PointsTable";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}> 
      <Route path="/" element={<Home/>} />
      <Route path="/pointsTable" element={<PointsTable/>} />
      </Route>
      <Route path="/matchDetails/:id" element={<MatchDetails/>}/>
    </Routes>
  );
}

export default App;