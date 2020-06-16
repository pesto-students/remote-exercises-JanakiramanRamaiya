import React from "react";
import Button from "../button/button.component";
import "./header.style.css";
import PopUp from "../pop-up/pop-up.component";
class ButtonContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryName: "",
    };
  }
  addGroceryHandler() {
    this.props.groceryListHandler(this.state.groceryName);
    this.setState({ groceryName: "" });
  }
  setGroceryName(e) {
    this.setState({ groceryName: e.target.value });
  }
  groceryListReset() {
    this.props.groceryListReset();
  }
  render() {
    return (
      <div className='button-container'>
        <div className='addInput'>
          <div className='form__group'>
            <input
              onChange={(e) => this.setGroceryName(e)}
              type='text'
              id='text'
              className='form__field'
              placeholder='grocery to add'
              value={this.state.groceryName}
            />
            <label htmlFor='text' className='form__label'>
              add Grocery
            </label>
          </div>
        </div>
        <Button
          color='#f14ebd'
          handler={() => this.addGroceryHandler()}
          name='add Grocery'
          // groceryName={this.state.groceryName}
        />
        <Button
          color='red'
          name='reset'
          handler={() => this.groceryListReset()}
        />
      </div>
    );
  }
}
export default ButtonContainer;
