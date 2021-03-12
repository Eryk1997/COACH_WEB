import React, { Component } from "react";

export default class InputPupilInfo extends Component {
  render() {
    const name =
    this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    return (
      <div>
        <div className=" form-group row text-warning">
          <label for="inputEmail3" className=" col-sm-2 col-form-label">
            {this.props.nameField}
          </label>
          <div className="col-sm-6">
            <input
              type={this.props.typeField}
              onChange={this.props.func}
              name={this.props.name}
              id={this.props.name}
              value={this.props.val}
              placeholder={this.props.placeholderField}
              className="form-control col-11 bg-secondary text-white"
            />
          </div>
        </div>
        <p className="text-danger" id={"error" + name}></p>
      </div>
    );
  }
}
