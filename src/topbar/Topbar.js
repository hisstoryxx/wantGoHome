import React from 'react'
import "./topbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo_Design from './Logo.png'


export default function TopBar() {
  return (
    <div className="top">
      <div className="container">
        <div className="topLeft">
        <img 
              className="topImg"
              src={Logo_Design} alt=""/>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">Introduction</li>
            <li className="topListItem">Members</li>
            <li className="topListItem">Research</li>
            <li className="topListItem">Publication</li>
            <li className="topListItem">Board</li>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </ul>
          
        </div>
      </div>
      
      
        
    </div>
  )
}