import React from 'react';
import './sidebar.css';
import { SidebarData } from './sidebarData';
import img1 from '../img/img1.png';

function Sidebar() {
  return (
    <div className="sidebar">

       <div> 
          <img src={img1} alt="" />
       </div>


        <ul className="sidebarList">
          {SidebarData.map((val,key) => {
            return (
              <li key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}
              >
            
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>  
            </li>
            );
          })} 
        </ul>
    </div>
  )
}

export default Sidebar