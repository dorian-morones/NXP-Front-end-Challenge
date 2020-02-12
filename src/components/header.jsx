import React from 'react';
import Logo from "../../assets/image/NXP-logo.jpg"

export const Header = () => {
    return (
        <div id="menu" className="section">
            <div className="row">
                <div className="col s1">
                    <img className="logo" src={Logo} />
                </div>
                <div className="col s7">
                    <nav>
                        <div className="nav-wrapper">
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Applications</a></li>
                                <li><a href="#">Designs</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Company</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="col s2 search">
                <i className="fas fa-search"></i><input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                </div>
                <div className="col s2 menu_apps">
                    <p><i className="fas fa-user"></i> My NXP</p>
                    <p><i className="fas fa-globe"></i> EN</p>
                    <p><i className="fas fa-shopping-cart"></i> Cart</p>
                </div>
            </div>
        </div>
    )
}