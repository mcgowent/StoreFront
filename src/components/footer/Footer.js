import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.css'

const Footer = () => {
return (
    <div className="footer">
        <h2 className="inProgress">Welcome to my Work in Progress Login form for My Store Front!</h2>
        <div className='cols'>
            <div className="col-1">
                <ul>
                    <li><a href="#">New Designs</a></li>
                    <li><a href="#">Shirts <FontAwesomeIcon icon={"chevron-right"} /></a>
                        <ul>
                            <li><a href="#">Men's</a></li>
                            <li><a href="#">Women's</a></li>
                            <li><a href="#">Unisex</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-2">
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    </ul>
            </div>
        </div>
        <p>The Store Front&copy;Copyright Timothy McGowen</p>
    </div>
)
}

export default Footer;