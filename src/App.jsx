import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Cards from "./Components/Cards";



const App = () => {
    return (
        <div>
          <Navbar/>   
          <Home/> 
          <Cards/> 
        </div>
    )
}
export default App;