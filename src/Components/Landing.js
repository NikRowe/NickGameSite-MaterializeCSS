import React, { Component } from 'react';
import GameCard from './GameCard';
import { INVENTORY } from "../Data/inventory";



class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: INVENTORY
    };
  }

  render() {
    return (
      <>
        <div className="row promotion-wrapper">
          <div className="promotion-img">
            <div className="promotion-content">
              <p> FEATURED APP </p>
              <h5 style={{ fontWeight: "950" }}> SPONGEBOB: PATTY ~{'\n'} PURSUIT</h5>
              <p>You can play as SpongeBob on his epic, most side-scrolly quest through Bikini Bottom ever! Ask a grown-up if you can try it only on Apple Arcade</p>
              <a className="btn orange" href="/">PLAY THE GAME</a>
            </div>
            <div className="advertisement-bar">Advertisement</div>
          </div>
        </div>
        <div className="container">
          <div className="row content-title">
            <h5 style={{ fontWeight: "950" }}> GAMES </h5>
          </div>
          <div className="row">
            {this.state.inventory.map(item => (
              <div key={item.id} className="col m6 l3" >
                <GameCard
                  item={item}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Landing;

