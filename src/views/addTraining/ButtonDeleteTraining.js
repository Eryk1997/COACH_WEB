import React, { Component } from "react";

import axios from "axios";
import config from "../../Config/config";

export default class ButtonDeleteTraining extends Component {
  constructor(props) {
    super(props);

    this.deleteTraining = this.deleteTraining.bind(this);
  }

  deleteTraining() {
    console.log(this.props.id_training);
    axios
      .delete(config.deleteTrainingByIdUrl + this.props.id_training)
      .then((res) => window.location.reload(true));

  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.deleteTraining}
          className="btn btn-outline-warning"
        >
          Usuń
        </button>
      </div>
    );
  }
}
