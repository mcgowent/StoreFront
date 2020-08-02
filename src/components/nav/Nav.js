import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <ul className="topLevel">
                <li><h3 className="logo"><a href="#">The Store Front</a></h3></li>
                <li><a href="#">New Designs</a></li>
                <li className="hasDropdown"><a href="#">Shirts <FontAwesomeIcon icon={"chevron-down"} /></a>
                    <ul>
                        <li><a href="#">Men's</a></li>
                        <li><a href="#">Women's</a></li>
                        <li><a href="#">Unisex</a></li>
                    </ul>
                </li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><FontAwesomeIcon icon={"shopping-cart"} /></li>
            </ul>
        </div>
    )
}

export default Nav;