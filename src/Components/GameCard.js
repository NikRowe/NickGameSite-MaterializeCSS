import React from "react";
import {
  Col,
  Card,
  Icon,
  CardTitle,
  Button,
  TextInput
} from 'react-materialize';

// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   Button,
//   Input,
//   Label
// } from "reactstrap";

const GameCard = ({ item }) => {
  return (
    <Card
      className="KaiserText card small hoverable"
      actions={[
        <>
          <Button
            node="button"
            style={{
              marginRight: '5px'
            }}
            waves="light"
            className="KaiserBg btnH"
          >
            Add Item
          <Icon left>
              add
          </Icon>
          </Button>
          <Button
            node="button"
            waves="light"
            className="KaiserBg btnH"
          >
            Remove Item
          <Icon left>
              remove
          </Icon>
          </Button>
        </>
      ]}
      header={<CardTitle image={item.image} />}
      title={
        <>
          <span className="inventoryItemText" >{item.name} </span>
          <label for={item.id} className="inventoryItemText KaiserText TextInput">{item.totalAmount}</label>
        </>
      }

      horizontal
    >
      <Col
        m={3}
        s={12}>
        <TextInput
          id={item.id}
          placeholder="0"
          className="TextInput"
        />
      </Col>
    </Card>
  );
};

export default GameCard;
