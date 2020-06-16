import React from "react";
import "./pop-up.style.css";
import Button from "../button/button.component";

const PopUp = ({ handler, isactive, groceryListHandler }) => {
  const popupHandler = (e) => {
    groceryListHandler(e);
    handler();
  };
  return (
    <div id='myModal' className='modal'>
      <div className='modal-content'>
        <span
          style={{ display: `${isactive ? "block" : "none"}` }}
          onClick={handler}
          className='close'
        >
          &times;
        </span>
        <div className='addInput'>
          <div class='form__group' onChange={(e) => popupHandler(e)}>
            <input
              type='text'
              id='text'
              class='form__field'
              placeholder='grocery to add'
            />
            <label for='text' class='form__label'>
              add Grocery
            </label>
          </div>
          <Button handler={(e) => popupHandler(e)} />
        </div>
      </div>
    </div>
  );
};
export default PopUp;
