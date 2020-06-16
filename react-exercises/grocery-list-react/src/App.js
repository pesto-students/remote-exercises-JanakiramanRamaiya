import React from "react";

import "./App.css";
import Header from "./components/header/header.component";
import ListDisplay from "./components/listDisplay/listDisplay.component";
class App extends React.Component {
  constructor() {
    super();
    this.state = { groceryList: [], popUp: false };
  }
  groceryListHandler(value) {
    const { groceryList } = this.state;
    if (value) {
      let isgrocery = groceryList.find((grocery) => grocery.name === value);
      if (isgrocery) {
        isgrocery = groceryList.map((grocery) => {
          if (grocery.name === value) {
            grocery.quantity += 1;
          }
          return grocery;
        });

        this.setState({ groceryList: [...isgrocery] });
      } else {
        isgrocery = { name: value, quantity: 1 };
        this.setState({
          groceryList: [...this.state.groceryList, isgrocery],
        });
      }
    }
  }
  groceryListReset() {
    this.setState({ groceryList: [] });
  }
  render() {
    return (
      <div>
        <div className='container'>
          <Header
            groceryListHandler={(value) => this.groceryListHandler(value)}
            groceryListReset={() => this.groceryListReset()}
          />
        </div>
        <div className='listContainer'>
          <ListDisplay groceryList={this.state.groceryList} />
        </div>
      </div>
    );
  }
}

export default App;
