import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SideNav.css'; // Import CSS for styling
import UserIcon from '../../images/user .png'
import ManagerIcon from '../../images/chat.png'
import ChatIcon from '../../images/manager.png'
import HRIcon from '../../images/hr.png'

const sideNav = () => {

return (
    <div className="sidenavigationBar">
        <div className="sideBarContent">
            <img className="itemLogo" src={UserIcon}/>
            <Link to="/" className="sideBarcontentItem">
            User Dashboard
            </Link>
        </div>
        <div className="sideBarContent">
            <img className="itemLogo" src={ChatIcon}/>
            <Link to="/chatBot" className="sideBarcontentItem">
            Chat
            </Link>
        </div>
        <div className="sideBarContent">
            <img className="itemLogo" src={ManagerIcon}/>
            <Link to="/manager" className="sideBarcontentItem">
            Manager Dashboard
            </Link>
        </div>
        <div className="sideBarContent">
            <img className="itemLogo" src={HRIcon}/>
            <Link to="/hr" className="sideBarcontentItem">
            HR Dashboard
            </Link>
        </div>

    </div>
);
};

export default sideNav;