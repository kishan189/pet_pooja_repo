import React from 'react'
 import {NavLink} from "react-router";
 import "./header.css";
function Header() {
  return (
    <div className='headerDiv'>
        <ul>
            <li>
               <NavLink to="">Custome Table</NavLink>
            </li>
            <li>
            <NavLink to="/form">Custome Form</NavLink>
            </li>
            {/* <li><NavLink to="/form">Custome Data Picker</NavLink></li> */}
        </ul>
    </div>
  )
}

export default Header