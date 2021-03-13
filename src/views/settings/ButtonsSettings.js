import React, { Component } from "react";


export default class ButtonsSettings extends Component {
  constructor(props){
    super(props)
}
  render() {
    return (
      <div>
        <div className="text-center">
          <button type="submit" className="btn  mt-2 btn-outline-warning">
            Zapisz zmiany
          </button>
        </div>
        <button
          type="button"
          onClick={this.props.func}
          className="btn mt-4 btn-outline-warning"
        >
          Usuń konto
        </button>
      </div>
    );
  }
}
