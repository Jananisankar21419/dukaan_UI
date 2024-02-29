import React from "react"; 
import Sidebar from "./components/Sidebar";

import Container from "./components/Container";
import "./index.css";


function App() {
  return (
    <div className="flex">
    <Sidebar/>
    <Container/>
    </div>

  );
}

export default App;
