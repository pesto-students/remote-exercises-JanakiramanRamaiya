import React from "react";

const withState = (counter, updateStateValue, intialCounter) => {
  return (BaseComponent) => {
    return class extends React.Component {
      constructor() {
        super();
        this.state = {
          [counter]: intialCounter,
          [updateStateValue]: this[updateStateValue],
        };
      }

      [updateStateValue] = (fn) => {
        if (typeof fn === "function") {
          this.setState((PrevState) => ({
            [counter]: fn(PrevState[counter]),
          }));
        }
      };

      render() {
        return <BaseComponent {...this.state} {...this.props} />;
      }
    };
  };
};
export default withState;
