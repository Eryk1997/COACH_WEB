/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import "./AddTraining.css";

import axios from "axios";
import config from "../../Config/config";
import InputAddTraining from "./InputAddTraining";
import ButtonDeleteTraining from "./ButtonDeleteTraining";

export default class AddTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "Wybierz ćwiczenie",
      exercises: [],
      listTraining: [],
      weight: "",
      number_of_repetitions: "",
      pupil: JSON.parse(window.localStorage.getItem("pupil")),
      trainer: JSON.parse(window.localStorage.getItem("trainer")),
    };

    this.setExercise = this.setExercise.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(config.getExercises)
      .then((res) => this.setState({ exercises: res.data }))
      .catch((err) => console.log(err));

    this.setTraining();
  }

  setExercise(event) {
    this.setState({ exercise: event.target.value });
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  getDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var StringDate = year + "-" + month + "-" + day;
    return StringDate;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.exercise == "Wybierz ćwiczenie")
      document.getElementById("errorExercise").innerHTML = "Wybierz ćwiczenie";
    else document.getElementById("errorExercise").innerHTML = "";

    axios
      .post(
        config.addTraining + this.state.pupil.id + "/" + this.state.exercise,
        {
          id_pupil: this.state.pupil.id,
          id_exercise: this.state.exercise,
          weight: this.state.weight,
          number_of_repetitions: this.state.number_of_repetitions,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        this.setTraining();
      })
      .catch((err) => console.log(err));
  }

  setTraining() {
    axios
      .get(
        config.findTrainingsByDateUrl +
          this.state.pupil.id +
          "?date=" +
          this.getDate()
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ listTraining: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="backgroundTraining" className="text-center text-warning">
        <div className="row m-4">
          <form onSubmit={this.handleSubmit}>
            <label>
              Wybierz ćwiczenie:
              <select
                className="text-warning bg-secondary ml-3"
                name={this.state.name}
                value={this.state.exercise}
                onChange={this.setExercise}
              >
                {this.state.exercises.map((e) => (
                  <option value={e.id}>{e.name}</option>
                ))}
              </select>
            </label>
            <p id="errorExercise"></p>

            <label>
              Podaj obciążenie
              <InputAddTraining
                func={this.handleChange}
                val={this.state.weight}
                name="weight"
              />
            </label>
            <label>
              Podaj ilość serii
              <InputAddTraining
                func={this.handleChange}
                val={this.state.number_of_repetitions}
                name="number_of_repetitions"
              />
            </label>
            <button
              type="submit"
              className="btn col-2 mt-2 btn-outline-warning"
            >
              Dodaj
            </button>
          </form>
        </div>
        {this.state.listTraining.map((e) => (
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
            <ButtonDeleteTraining func={this.deleteTrainer} id_training={e.id}/>

          </div>
        ))}
      </div>
    );
  }
}
