import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';

import ProfileMenu from '../ProfileMenu/ProfileMenu';

import "./Layout.css";

const Layout = ({userAuth}) => {
  return (
    <div className='Layout'>
      <div className="headerSection">
        <MainNavigation/>
        <ProfileMenu userAuth={userAuth}/>
        </div>
      <div className="mainSection">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout;