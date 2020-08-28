import React, { Component, useEffect } from 'react';
import M from 'materialize-css'
import { Link } from 'react-router-dom';
import Popover from '@material-ui/core/Popover'


const Navbar = () => {

    // SHOWS POPOVER OPEN ON SIDENAVE ITEM HOVER //
    const handlePopoverOpen = (event) => {
        const popOver = document.getElementById('popOver')
        popOver.classList.remove('hide')
    };

    // SHOWS POPOVER CLOSE UPON LEAVING THE POPOVER //
    const handlePopoverClose = () => {
        const popOver = document.getElementById('popOver')
        popOver.classList.add('hide')
    };

    // OPENS SIDENAV VIA MATERIALIZE CSS//
    useEffect(() => {
        const sideNav = document.querySelectorAll('.sidenav');
        const options = {
            edge: 'left'
        }
        M.Sidenav.init(sideNav, options);
    })

    return (
        <>
            {/* RESPONSIVE SCROLL NAV */}
            <div className="navbar-fixed hide" id="navScrolled" >
                <nav className="navScrolled">
                    <Link to="/" className="brand-logo">
                        <img src="https://nick.mtvnimages.com/nick-assets/common/nick-logo-200x200.png" height="60rem" alt="Nickalodeon Logo" className="logo-img" />
                    </Link>
                    <a href="!#" data-target="Main-Menu" className="sidenav-trigger black-text show-on-medium-and-up">
                        <i className="material-icons">menu</i>
                    </a>
                    <div className="brand-logo center scrolledNavContent" id="nav-content">
                        <ul className=" hide-on-med-and-down">
                            <li><Link to="/" className="black-text nav-item">SHOWS</Link></li>
                            <li><Link to="/" className="black-text nav-item active">GAMES</Link></li>
                            <li><Link to="/" className="black-text nav-item">APPS</Link></li>
                            <li><Link to="/" className="black-text nav-item">TV SCHEDULE</Link></li>
                            <li><Link to="/" className="black-text nav-item">PRIVACY POLICY</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>



            {/* TOP OF PAGE NAV */}
            <nav id='navbar'>
                <div className="nav-wrapper">
                    {/* Logo*/}
                    <div className="logo" onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}>
                        <Link to="/" className="brand-logo center">
                            <img src="https://nick.mtvnimages.com/nick-assets/common/nick-logo-200x200.png" height="120rem" alt="Nickalodeon Logo" className="logo-img" />
                        </Link>
                    </div>
                    {/* Sidenav toggle */}
                    <a href="!#" data-target="Main-Menu" className="sidenav-trigger black-text show-on-medium-and-up" id="topNavTrigger">
                        <i className="material-icons">menu</i>
                    </a>
                </div>
                <div className="nav-content brand-logo center" id="nav-content">
                    <ul className=" hide-on-med-and-down">
                        <li ><Link to="/" className="black-text nav-item" >SHOWS</Link></li>
                        <li><Link to="/" className="black-text nav-item active">GAMES</Link></li>
                        <li><Link to="/" className="black-text nav-item">APPS</Link></li>
                        <li><Link to="/" className="black-text nav-item">TV SCHEDULE</Link></li>
                        <li><Link to="/" className="black-text nav-item">PRIVACY POLICY</Link></li>
                    </ul>
                </div>
            </nav>

            {/* Sidenav Display */}
            <ul className="sidenav" id="Main-Menu">
                <li><Link to="/" className="white-text">HOME</Link></li>
                <li onMouseEnter={handlePopoverOpen}>
                    <Link to="/" className="white-text">SHOWS<i className="material-icons right white-text">keyboard_arrow_right</i></Link>
                </li>
                <li><Link to="/" className="white-text">GAMES</Link></li>
                <li><Link to="/" className="white-text">APPS</Link></li>
                <li><Link to="/" className="white-text">TV SCHEDULE</Link></li>
                <li><Link to="/" className="white-text">PRIVACY POLICY</Link></li>
            </ul>
            <div id="popOver" className="row popOver hide" onMouseLeave={handlePopoverClose}>
                <a href="/" className="popOverItem col s6">ALVINNN!!! AND THE CHIPMUNKS</a>
                <a href="/" className="popOverItem col s6">SPONGBOB SQUAREPANTS</a>
                <a href="/" className="popOverItem col s6">TYLER PERRY'S YOUNG DYLAN</a>
                <a href="/" className="popOverItem col s6">LEGO CITY ADVENTURES</a>
                <a href="/" className="popOverItem col s6">GROUP CHAT WITH ANNIE AND JAYDEN</a>
                <a href="/" className="popOverItem col s6">LEGO JURASSIC WORLD</a>
                <a href="/" className="popOverItem col s6">DANGER FORCE</a>
                <a href="/" className="popOverItem col s6">THE CRYSTAL MAZE</a>
                <a href="/" className="popOverItem col s6">THE LOUD HOUSE</a>
                <a href="/" className="popOverItem col s6">THE SUBSTITUTE</a>
                <div className="row">
                    <a href="/" role="button" className="btn orange popOverBtn"> SEE ALL SHOWS </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;