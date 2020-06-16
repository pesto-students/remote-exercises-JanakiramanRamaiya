import React from "react";
import "./button.style.css";
const Button = ({ color, name, handler }) => {
  console.log(handler);
  color = color ? color : "green";
  name = name ? name : "click me";
  return (
    <button onClick={handler} style={{ backgroundColor: `${color}` }}>
      {name}
    </button>
  );
};

export default Button;
