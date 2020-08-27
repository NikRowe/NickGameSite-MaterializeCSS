import React, { Component } from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';


class Navbar extends Component {

    componentDidMount() {
        const sideNav = document.querySelectorAll('.sidenav');
        const options = {
            edge: 'left'
        }
        M.Sidenav.init(sideNav, options);
    }

    render() {

        return (
            <>
                <nav>
                    <div className="nav-wrapper white">
                        {/* Logo*/}
                        <div className="logo">
                            <Link to="/" className="brand-logo center">
                                <img src="https://nick.mtvnimages.com/nick-assets/common/nick-logo-200x200.png" height="120rem" alt="Nickalodeon Logo" className="logo-img"/>
                            </Link>
                        </div>
                        {/* Sidenav toggle */}
                        <a href="!#" data-target="Main-Menu" className="sidenav-trigger black-text show-on-medium-and-up">
                            <i className="material-icons">menu</i>
                        </a>
                    </div>
                    <div className="nav-content brand-logo center" id="nav-content">
                        <ul className=" hide-on-med-and-down">
                            <li><Link to="/" className="black-text nav-item">SHOWS</Link></li>
                            <li><Link to="/" className="black-text nav-item active">GAMES</Link></li>
                            <li><Link to="/" className="black-text nav-item">APPS</Link></li>
                            <li><Link to="/" className="black-text nav-item">TV SCHEDULE</Link></li>
                            <li><Link to="/" className="black-text nav-item">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* Sidenav Display */}
                <ul className="sidenav" id="Main-Menu">
                    <li><Link to="/" className="white-text ">HOME</Link></li>
                    <li><Link to="/" className="white-text">SHOWS<i class="material-icons right white-text">keyboard_arrow_right</i></Link></li>
                    <li><Link to="/" className="white-text">GAMES</Link></li>
                    <li><Link to="/" className="white-text">APPS</Link></li>
                    <li><Link to="/" className="white-text">TV SCHEDULE</Link></li>
                    <li><Link to="/" className="white-text">PRIVACY POLICY</Link></li>
                </ul>
            </>
        )
    }
}

export default Navbar;