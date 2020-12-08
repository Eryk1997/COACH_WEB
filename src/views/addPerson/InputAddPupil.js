import React, { Component } from "react";

export default class InputAddPupil extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
    return (
      <div>
        <div class="form-group row text-warning">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            {this.props.InputName}
          </label>
          <div className="col-sm-10">
            <input
              type={this.props.typeField}
              onChange={this.props.func}
              value={this.props.val}
              name={this.props.name}
              className="form-control col-8 bg-secondary text-white"
            />
          </div>
        </div>
        <p className="text-danger" id={"error" + name}></p>
      </div>
    );
  }
}
