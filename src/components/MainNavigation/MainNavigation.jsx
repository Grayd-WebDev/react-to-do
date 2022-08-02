import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./MainNavigation.css";

const MainNavigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menuItems = [
    {title: "Main", hasChild: 0, link: "/"},
    {title: "Login", hasChild: 0, link: "/login"},
    {title: "Registration", hasChild: 0, link: "/register"}
  ];

  const onClickToggleBars = (e) =>{
    e.stopPropagation();
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className='mainNavigation'>
      <div className={`toggleBars ${toggleMenu?"toggleActive":""}`} onClick={onClickToggleBars}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`hiddenToggleMenuWrapper ${toggleMenu?"toggleActive":""}`} onClick={onClickToggleBars}>
        
        <div className='hiddenMenuItems'>
          <div className='closeMenuBtn' onClick={onClickToggleBars}>
            <span></span>
            <span></span>
          </div>
          {menuItems.map((item)=>{
            return <div className='hiddenMenuItemsInner'><NavLink onClick={onClickToggleBars} to={item.link}>{item.title}</NavLink></div>
          })}
        </div>

      </div>
    </div>
  )
}

export default MainNavigation;