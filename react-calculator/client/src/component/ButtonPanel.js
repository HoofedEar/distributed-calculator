import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = (buttonName, serviceName) => {
    this.props.clickHandler(buttonName, serviceName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="÷" service="node" clickHandler={this.handleClick} orange />
          <Button name="÷" service="kotlin" clickHandler={this.handleClick} orange />
          <Button name="÷" service="rust" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" service="python" clickHandler={this.handleClick} orange />
          <Button name="x" service="rust" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" service="csharp" clickHandler={this.handleClick} orange />
          <Button name="-" service="php" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" service="java" clickHandler={this.handleClick} orange />
          <Button name="+" service="go" clickHandler={this.handleClick} orange />
          <Button name="+" service="cpp" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} wide orange />
        </div>
      </div>
    );
  }
}
