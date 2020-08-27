import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Myfooter = () => {

    return (
        <footer className="page-footer" >
            <div className="container ">
                <div className="row footer-links">
                    <ul >
                        <li className="col"><Link to="/" className="footer-text">PRIVACY POLICY</Link></li>
                        <li className="col"><Link to="/" className="footer-text">TERMS OF USE</Link></li>
                        <li className="col"><Link to="/" className="footer-text">COPYRIGHT COMPLIANCE</Link></li>
                        <li className="col"><Link to="/" className="footer-text">ARBITRATION FAQ</Link></li>
                        <li className="col"><Link to="/" className="footer-text">CLOSED CAPTIONING CONTACT</Link></li>
                        <li className="col"><Link to="/" className="footer-text"> GROWNUPS</Link></li>
                        <li className="col"><Link to="/" className="footer-text">TV SCHEDULE</Link></li>
                        <li className="col"><Link to="/" className="footer-text">WORK WITH US</Link></li>
                        <li className="col"><Link to="/" className="footer-text">KEEP VIACOM</Link></li>
                        <li className="col"><Link to="/" className="footer-text">TV RATINGS</Link></li>
                    </ul>
                </div>
                <div className="row footer-social">
                    <ul>
                        <li className="col"><Link to="/"className="footer-text"><FontAwesomeIcon icon={faFacebookSquare} /></Link></li>
                        <li className="col"><Link to="/"className="footer-text"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li className="col"><Link to="/"className="footer-text"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                    </ul>
                </div>
                <p className="copywright">© 2020 Viacom International Inc. All Rights Reserved. Nick and all related titles, logos and characters are trademarks of Viacom International Inc.</p>
            </div>
        </footer>
    )
}

export default Myfooter