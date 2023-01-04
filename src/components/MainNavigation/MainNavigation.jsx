import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./MainNavigation.css";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    {id: 1, title: "Main", hasChild: 0, link: "/"},
    {id: 2, title: "Login", hasChild: 0, link: "/login"},
    {id: 3, title: "Registration", hasChild: 0, link: "/register"}
  ];

  const onClickToggleBars = (e) => {
    e.stopPropagation();
    console.log(e.target);
    setToggleMenu(!toggleMenu);
  }
  

  return (
    <div className='mainNavigation'>
      <div className={`toggleBars ${toggleMenu?"toggleActive":""}`} onClick={onClickToggleBars}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`hiddenToggleMenuWrapper ${toggleMenu?"toggleActive":""}`}>
        <div className="hiddenBackground" onClick={onClickToggleBars}>
          
        </div>
        <div className='hiddenMenuItems'>
          <div className='closeMenuBtn' onClick={onClickToggleBars}>
            <span></span>
            <span></span>
          </div>
          {menuItems.map((item)=>{
            return <div key={item.id} className='hiddenMenuItemsInner'><NavLink onClick={onClickToggleBars} to={item.link}>{item.title}</NavLink></div>
          })}
        </div>

      </div>
    </div>
  )
}

export default MainNavigation;