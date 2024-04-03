import React, { useState } from 'react';
import './Button.css'; // Import CSS for styling
import { useNavigate, Link } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import Intro from '../IntroSec/IntroSec';

const Button = ({
    text, type, icon, disabled, scrollToId,
  }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      // Redirect to different pages based on button type
      if (type === 'access') {
        navigate('/getInTouch');
      } else if (type === 'remove') {
        navigate('/', { state: { scrollToDownload: true } });
      } else if (type === 'add submission') {
        navigate('/getInTouch');
      } else if (type === 'download') {
        navigate('/', { state: { scrollToDownload: true } });
      }
    };


return (
    <button className={`btn ${type}`} onClick={handleClick} type="button" disabled={disabled}>
      {icon && <img className="iconn" src={icon} alt="" />}
      {text}
    </button>
);
};

export default Button;