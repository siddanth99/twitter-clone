import React from 'react'
import './Sidebar.css'
import { Link, NavLink,Navigate } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"
import {MdExplore} from "react-icons/md"
import {AiFillShop} from "react-icons/ai"
import {GrMapLocation} from "react-icons/gr"
import {CgProfile} from "react-icons/cg"
import {MdFastfood} from "react-icons/md"
import {MdContactSupport} from "react-icons/md"



function Sidebar() {
  return (
    <div className='sidebar'>
        <NavLink to="/Home" className="menu-item" id="home">
         <p> <span><AiFillHome/></span>Home</p>
        </NavLink>

          <NavLink to="/Explore" className="menu-item" id="explore">
            <p><span><MdExplore/></span>Explore</p>
          </NavLink>

          <NavLink to="/Shop" className="menu-item" id="shop">
         <p> <span><AiFillShop/></span> Shop</p>
        </NavLink>

        <NavLink to="/NearYou" className="menu-item" id="nearyou">
         <p> <span><GrMapLocation/></span> Near You</p>
        </NavLink>

        <NavLink to="/Profile" className="menu-item" id="profile">
         <p> <span><CgProfile/></span> Profile</p>
        </NavLink>

        <NavLink to="/OrderFood" className="menu-item" id='orderfood'>
         <p> <span><MdFastfood/></span> Order Food</p>
        </NavLink>

        <NavLink to="/ContactUs" className="menu-item" id="contactus">
         <p> <span><MdContactSupport/></span> Contact Us</p>
        </NavLink>


    </div>
  )
}

export default Sidebar
