import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling
import DellLogo from './images/DellTech_Logo_mobile.svg'

const Navbar = () => {


return (
    <div className="topnavBar">
        <div className ="header">
            <img className="dellLogo" src={DellLogo}/>
            <div className="groupLogo"> PADI </div>
        </div>
    </div>
);
};

export default Navbar;
