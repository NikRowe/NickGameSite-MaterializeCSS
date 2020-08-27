import React from "react";
import { Link } from 'react-router-dom'

const GameCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.image} alt={item.alt} />
      </div>
      <div className="card-content">
        <span className="card-title">{item.name}</span>
        <p>You can download here</p>
        {/* DETERMINES WHICH LINKS TO DISPLAY ON THE MAPPED GAME CARDS */}
        {item.apple && item.google && item.amazon
          ? <ul>
            <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
            <li><Link to="/"><img src="https://www.nick.com/google-store-badge.png" alt="Google Play Store" height="50px" /></Link></li>
            <li><Link to="/"><img src="https://www.nick.com/amazon-store-badge.png" alt="Amazon App Store" height="50px" /></Link></li>
          </ul>
          : item.apple && item.google
            ? <ul>
              <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
              <li><Link to="/"><img src="https://www.nick.com/google-store-badge.png" alt="Google Play Store" height="50px" /></Link></li>
            </ul>
            : item.apple && item.amazon
              ? <ul>
                <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
                <li><Link to="/"><img src="https://www.nick.com/amazon-store-badge.png" alt="Amazon App Store" height="50px" /></Link></li>
              </ul>
              : item.google && item.amazon
                ? <ul>
                  <li><Link to="/"><img src="https://www.nick.com/google-store-badge.png" alt="Google Play Store" height="50px" /></Link></li>
                  <li><Link to="/"><img src="https://www.nick.com/amazon-store-badge.png" alt="Amazon App Store" height="50px" /></Link></li>
                </ul>
                : item.apple
                  ? <ul>
                    <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
                  </ul>
                  : <div />
        }
        {/* <ul>
          <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
          <li><Link to="/"><img src="https://www.nick.com/google-store-badge.png" alt="Google Play Store" height="50px" /></Link></li>
          <li><Link to="/"><img src="https://www.nick.com/amazon-store-badge.png" alt="Amazon App Store" height="50px" /></Link></li>
        </ul> */}
      </div>
      <div className="advertisement-bar">Advertisement</div>
    </div>
  );
};

export default GameCard;
