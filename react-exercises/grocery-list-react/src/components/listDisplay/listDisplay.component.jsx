import React from "react";
import "./listDisplay.style.css";
import List from "../list/list.component";

class ListDisplay extends React.Component {
  constructor() {
    super();
  }

  render() {
    const groceryList = this.props.groceryList;
    return (
      <ul>
        {groceryList.map((grocery, index) => (
          <List
            key={index + 1}
            name={grocery.name}
            quantity={grocery.quantity}
          />
        ))}
      </ul>
    );
  }
}

export default ListDisplay;
