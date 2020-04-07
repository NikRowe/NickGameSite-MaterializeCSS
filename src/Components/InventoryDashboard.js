import React, {Component} from 'react';
import InventoryCard from './InventoryCardComponent';
import { INVENTORY } from "../Data/inventory";



class InventoryDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: INVENTORY
    };
  }

  updateInventoryItemValue = (itemId, use) => () => {
    let inputVal = parseInt(document.getElementById(itemId).value);

    if (isNaN(inputVal) || inputVal === "" || inputVal === null) {
      return;
    } else {
      let updatedInventory = [...this.state.inventory];
      updatedInventory.map(inventoryItem => {
        // update matching inventoryItem obj with added input val
        if (inventoryItem.id === itemId) {
          if (use && use === "increment") {
            inventoryItem.totalAmount += inputVal;
          } else {
            inventoryItem.totalAmount -= inputVal;
          }
        }
        return inventoryItem;
      });
      this.setState({
        inventory: updatedInventory
      });
      document.getElementById(itemId).value = "";
    }

    // let inputVal = document.getElementById(itemId).value
    // if (isNaN(inputVal) || inputVal === "" || inputVal === null) { return; }
    // else {
    // const updatedInventory = [...this.state.inventory]
    // for(var i = 0; i < updatedInventory.length; i++) {
    //   let inventoryItem = updatedInventory[i]
    //     if( inventoryItem.id === itemId) {
    //       inventoryItem.totalAmount = inventoryItem.totalAmount + parseInt(inputVal);
    //       this.setState({
    //         inventory: updatedInventory
    //       });
    //     }
    //   }
    // }
  };

  render() {
    return (
      <div>
          <div className="row">
            <div className="col">
              <h2>Card Display</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            {this.state.inventory.map(item => (
              <div key={item.id} className="col-md-4 m-1">
                <InventoryCard
                  item={item}
                  updateInventoryItemValue={this.updateInventoryItemValue}
                />
              </div>
            ))}
          </div>
        </div>
    );
  }
}

export default InventoryDashboard;

