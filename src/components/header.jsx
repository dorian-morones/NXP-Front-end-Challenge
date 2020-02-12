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
                        <div class="nav-wrapper">
                            <ul id="nav-mobile" class="left hide-on-med-and-down">
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
                <i class="fas fa-search"></i><input placeholder="Placeholder" id="first_name" type="text" class="validate" />
                </div>
                <div className="col s2 menu_apps">
                    <p><i class="fas fa-user"></i> My NXP</p>
                    <p><i class="fas fa-globe"></i> EN</p>
                    <p><i class="fas fa-shopping-cart"></i> Cart</p>
                </div>
            </div>
        </div>
    )
}