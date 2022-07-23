import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';

import ProfileMenu from '../ProfileMenu/ProfileMenu';

import "./Layout.css";

const Layout = () => {
  return (
    <div className='Layout'>
      <div className="mainSection">
        <MainNavigation/>
        <Outlet/>
        <ProfileMenu />
      </div>
    </div>
  )
}

export default Layout;