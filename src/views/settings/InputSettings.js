import React, { Component } from "react";

export default class InputSettings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    return (
      <div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-4 col-form-label">
            {this.props.nameField}
          </label>
          <div className="col-sm-8">
            <input
              type={this.props.name}
              onChange={this.props.func}
              type={this.props.typeInput}
              name={this.props.name}
              value={this.props.val}
              className="form-control col-8 bg-secondary text-white"
            />
          </div>
        </div>
        <p id={"error" + name}></p>
      </div>
    );
  }
}
