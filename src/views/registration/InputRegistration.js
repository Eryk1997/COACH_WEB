/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export default class InputRegistration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    return (
      <div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-3 col-form-label">
            {this.props.fieldName}
          </label>
          <div className="col-sm-9">
            <input
              type={this.props.type}
              onChange={this.props.func}
              name={this.props.name}
              value={this.props.email}
              className="form-control col-8 bg-secondary text-white"
            />
          </div>
        </div>
        <p id={"error" + name}></p>
      </div>
    );
  }
}
