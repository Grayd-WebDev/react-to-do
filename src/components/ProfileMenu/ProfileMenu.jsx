import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

import { RiUserLine } from 'react-icons/ri';
import {FiSettings, FiLogOut} from "react-icons/fi";
import {FaSignInAlt} from "react-icons/fa";
import {AiOutlineUserAdd} from "react-icons/ai";

import ProfileMenuCss from "./ProfileMenuCss.module.css";
import { logoutUser } from '../../store/actionCreators';

const ProfileMenu = () => {
    const [rolledOut, setRollOut] = useState(false);
    const {isAuth} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

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
                {
                 isAuth ?
                 <>
                    <NavLink to={'/profile'}><FiSettings/></NavLink>
                    <span onClick={()=>{dispatch(logoutUser())}}>
                        <FiLogOut/>
                    </span>
                 </>
                 :
                 <>
                    <NavLink to={'/login'}><FaSignInAlt/></NavLink>
                    <NavLink to={'/register'}>
                        <AiOutlineUserAdd/>
                    </NavLink>
                 </>
                }
            </div> 
            <RiUserLine onMouseEnter={onHoverProfileIcon} onMouseLeave={onLeaveProfileIcon} className={ProfileMenuCss.ProfileMenuIcon}/>
        </div>
    </div>
  )
}

export default ProfileMenu;