import React, { useState } from 'react';
import './LearningMaterials.css'; // Import CSS for styling
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import SideNav from '../../components/SideNav/SideNav';
import Intro from '../../components/IntroSec/IntroSec';

const LearningMaterials = ({
    materialsText, accessLink
}) => {
    const navigate = useNavigate();

    const handleClick =() => {
        navigate('/Chat');
    }


return (
    <div className="learningMaterialsContainer">
        <div className="learningMaterialsText">
            {materialsText}
        </div>
        <a href={accessLink} className="accessButton">
            access
        </a>

    </div>
);
};

LearningMaterials.propTypes = {
    materialsText: PropTypes.string.isRequired,
    accessLink: PropTypes.string.isRequired,
};

export default LearningMaterials;