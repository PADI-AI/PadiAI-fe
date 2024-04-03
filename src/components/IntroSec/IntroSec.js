import React, { useState } from 'react';
import './IntroSec.css'; // Import CSS for styling
import PropTypes from 'prop-types';

const IntroSec = ({
    name, briefText, number, numberExp
}) => {


return (
    <section className="userPageIntroContainer">
        <div className="userPageIntroText">
            <div className="introTitle">
                Hi, {name}
            </div>
            <div className="introText">
            {briefText}
            </div>
        </div>
        <div className="userPageIntroStats">
            <div className="statsNumber">
                {number}
            </div>
            <div className="statsText">
                {numberExp}
            </div>
        </div>

    </section>
);
};

IntroSec.propTypes = {
    name: PropTypes.string.isRequired,
    briefText: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    numberExp: PropTypes.string.isRequired,
}

export default IntroSec;