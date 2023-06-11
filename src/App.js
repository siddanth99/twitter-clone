import './App.css';
import Feed from './Feed.js'
import Sidebar from './Sidebar.js'
import Widgets from './Widgets';
import Rout from './components/Rout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Explore from './components/Explore';
import Shop from './components/Shop';
import NearYou from './components/NearYou';
import OrderFood from './components/OrderFood';
import ContactUs from './components/ContactUs';
import Profile from './components/Profile';
import Login from './components/Login';
import Home from './components/Home';
// import  {Button}  from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar1 from "./components/sidebar1"

function MyForm() {
  const [login,setLogin]=useState(false)
  
  useEffect(()=>{
    if(window.location.pathname!=="/"){
     
      setLogin(!!(localStorage.getItem("login")))
      
        }
        console.log( !!(localStorage.getItem("login")))
  },[window.location.pathname])



 
  return(
<div className='Main_Home'>
    
  
   <Router>

    {/* <Sidebar /> */}

    {/* <Button>This is Button</Button> */}


    {login && <Sidebar />}

    <Routes>

        <Route exact path='/Explore'  element={<Explore />} />
        <Route exact path='/Home'  element={<Feed/>} />
        <Route exact path='/Shop'  element={<Shop/>} />
        <Route exact path='/NearYou'  element={<NearYou/>} />
        <Route exact path='/Profile'  element={<Profile/>} />
        <Route exact path='/OrderFood'  element={<OrderFood/>} />
        <Route exact path='/ContactUs'  element={<ContactUs/>} />
        <Route exact path='/'  element={<Login/>} />

    </Routes>

    </Router> 


  </div>

 );
}
export default MyForm;





  