import './App.css';
import rating from './images/rating.png';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import {Switch,Route, Router} from "react-router-dom";
import Addproducts from './components/AddProducts/Addproducts';

function App() {

  

  

  return (
    <div className="App">

      {/* <Navbar/> */}
     
  
          <Switch>

            <Route exact path="/" ><Homepage/> </Route> 
            <Route exact path="/AddPRODUCTS"> <Addproducts/> </Route>
          </Switch>
    
      
      
      {/* <Homepage/> */}


    </div>
  );
}

export default App;
