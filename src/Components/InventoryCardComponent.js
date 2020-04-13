import React from "react";
import {
  Row,
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

const InventoryCard = ({ item, updateInventoryItemValue }) => {
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
            onClick={updateInventoryItemValue(item.id, "increment")}
          >
            Add Item
          <Icon left>
              add
          </Icon>
          </Button>
          <Button
            node="button"
            waves="light"
            onClick={updateInventoryItemValue(item.id, "decrement")}
          >
            Remove Item
          <Icon left>
              remove
          </Icon>
          </Button>
        </>
      ]}
      header={<CardTitle image={item.image} />}
      title={<span >{item.name} {item.totalAmount}</span>}

      horizontal
    >
      <TextInput
        id={item.id}
        placeholder="0"
      />
    </Card>


    // <Card>
    //   <CardImg src ={item.image} alt="img here" width="10%"/>
    //   <CardBody>
    //     <CardTitle>
    //       <div className="row">
    //         <Label htmlFor={item.id} className="col-sm-10 col-md-9 KaiserText inventoryItemText">{item.name}</Label>
    //         {"  "}
    //         <span className="col KaiserText inventoryItemText">{item.totalAmount}</span>
    //       </div>
    //     </CardTitle>
    //     <CardText>
    //       <span className="row">
    //         <Input
    //           type="number"
    //           id={item.id}
    //           name={item.id}
    //           className="col-5"
    //         />
    //       </span>
    //       <Button
    //         className="KaiserBg"
    //         onClick={updateInventoryItemValue(item.id, "increment")}
    //       >
    //         Add
    //       </Button>{" "}
    //       <Button
    //         className="KaiserBg"
    //         onClick={updateInventoryItemValue(item.id, "decrement")}
    //       >
    //         Remove
    //       </Button>
    //     </CardText>
    //   </CardBody>
    // </Card>
  );
};

export default InventoryCard;
