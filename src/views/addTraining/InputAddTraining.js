import React, { Component } from "react";

export default class InputAddTraining extends Component {
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={this.props.func}
          id={this.props.name}
          name={this.props.name}
          value={this.props.val}
          className="form-control col-8 bg-secondary text-warning"
        />{" "}
      </div>
    );
  }
}
