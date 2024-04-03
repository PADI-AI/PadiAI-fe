import React, { useState } from 'react';
import './Footer.css'; // Import CSS for styling
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
    const currentyear = new Date().getFullYear();

return (
    <section className="footerStyle">
        <div className="copyright">
            Copyright
            {' '}
            &copy;
            {' '}
            {currentyear}
            {' '}
            <a href="https://www.dell.com/learn/us/en/uscorp1/site-terms-of-use-copyright" className="footerHyperLink">Dell Inc.</a>
        </div>
    </section>
);
};

export default Footer;