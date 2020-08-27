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
        <ul>
          <li><Link to="/"><img src="https://www.nick.com/apple-store-badge.png" alt="Apple App Store" height="50px" /></Link></li>
          <li><Link to="/"><img src="https://www.nick.com/google-store-badge.png" alt="Google Play Store" height="50px" /></Link></li>
          <li><Link to="/"><img src="https://www.nick.com/amazon-store-badge.png" alt="Amazon App Store" height="50px" /></Link></li>
        </ul>
      </div>
      <div className="advertisement-bar">Advertisement</div>
    </div>




    // <Card
    //   className="card small hoverable"
    //   actions={[
    //     <>
    //       <Button
    //         node="button"
    //         style={{
    //           marginRight: '5px'
    //         }}
    //         waves="light"
    //         className="KaiserBg btnH"
    //       >
    //         Add Item
    //       <Icon left>
    //           add
    //       </Icon>
    //       </Button>
    //       <Button
    //         node="button"
    //         waves="light"
    //         className="KaiserBg btnH"
    //       >
    //         Remove Item
    //       <Icon left>
    //           remove
    //       </Icon>
    //       </Button>
    //     </>
    //   ]}
    //   header={<CardTitle image={item.image} />}
    //   title={
    //     <>
    //       <span className="inventoryItemText" >{item.name} </span>
    //       <label for={item.id} className="inventoryItemText KaiserText TextInput">{item.totalAmount}</label>
    //     </>
    //   }

    //   horizontal
    // >
    //   <Col
    //     m={3}
    //     s={12}>
    //     <TextInput
    //       id={item.id}
    //       placeholder="0"
    //       className="TextInput"
    //     />
    //   </Col>
    // </Card>
  );
};

export default GameCard;
