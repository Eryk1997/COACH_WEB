import React, { Component } from "react";

import axios from "axios";
import config from "../../Config/config";
import ButtonDeleteTraining from './ButtonDeleteTraining'

export default class HistoryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pupil: JSON.parse(window.localStorage.getItem("pupil")),
      exercises: [],
    };
  }


  componentDidMount() {
    let createUrlWithId = "";
    if (window.location.href.includes("/historyInfo"))
      createUrlWithId = window.location.href.substr(34);
    console.log(createUrlWithId);
    axios
      .get(
        config.findTrainingsByDateUrl +
          this.state.pupil.id +
          "?date=" +
          createUrlWithId
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ exercises: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div class="text-center text-warning m-5">
        <p>{"Szczegóły treningu z dnia: " + window.location.href.substr(34) + "r."}</p>
        {this.state.exercises.map((e) => (
          <div className="row bg-secondary rounded mb-4 ml-4 mr-4">
            <div className="col-11">
              <div className="row border-left border-bottom ">
                <div className="col-5 border-right">Nazwa</div>
                <div className="col-3 border-right">Obciążenie</div>
                <div className="col-4 border-right">Ilość powtórzeń</div>
              </div>
              <div className="row border-left ">
                <div className="col-5 border-right">{e.exercise.name}</div>
                <div className="col-3 border-right">{e.weight} kg</div>
                <div className="col-4 border-right">
                  {e.number_of_repetitions}x
                </div>
              </div>
            </div>
            <ButtonDeleteTraining id_training={e.id}/>
          </div>
        ))}
      </div>
    );
  }
}
