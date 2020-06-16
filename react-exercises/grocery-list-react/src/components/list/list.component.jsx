import React from "react";
import "./list.style.css";

class List extends React.Component {
  constructor() {
    super();
    this.state = { click: false };
  }

  render() {
    const { name, quantity } = this.props;
    let color = this.state.click ? "red" : "#eee";
    return (
      <li
        onClick={() => {
          this.setState({ click: !this.state.click });
        }}
        style={{ backgroundColor: `${color}` }}
      >
        {name}
        <span className='badge badge--info'>{quantity}</span>
      </li>
    );
  }
}

export default List;
