
import React, { useState } from 'react'
import { RiUserLine } from 'react-icons/ri'
import {NavLink} from "react-router-dom";

import ProfileMenuCss from "./ProfileMenuCss.module.css";

const ProfileMenu = ({userAuth}) => {
    const [rolledOut, setRollOut] = useState(false);
    console.log(userAuth);
    let hiddenProfileStyle = {
        transform: rolledOut ? "rotate(0deg)":"rotate(90deg)",
        opacity: rolledOut ? "1":"0",
    };

    const onHoverProfileIcon = () => {
        setRollOut(true);
    };
    const onLeaveProfileIcon = () => {
        setRollOut(false);
    };

    return (
    <div className={ProfileMenuCss.ProfileMenu}>

        <div className={ProfileMenuCss.hiddenProfileMenuWrapper}>
            <div className={ProfileMenuCss.hiddenProfileMenu} style={hiddenProfileStyle} onMouseEnter={onHoverProfileIcon} onMouseLeave={onLeaveProfileIcon}>
                {userAuth?
                <div className={ProfileMenuCss.userAuth}>
                    <a href={'/login'}>{userAuth.user.email}</a>
                    <a href={'/login'}>Sign Out</a>
                    <a href={'/login'}>Login</a>
                </div>
                :<><NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/register'}>Register</NavLink></>}
            </div> 
            <RiUserLine onMouseEnter={onHoverProfileIcon} onMouseLeave={onLeaveProfileIcon} className={ProfileMenuCss.ProfileMenuIcon}/>
        </div>
    </div>
  )
}

export default ProfileMenu