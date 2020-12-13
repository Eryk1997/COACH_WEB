import React, { Component } from "react";

import "./ProtegesInfo.css";
import piotri from "../../Pictures/protegesInfo/piotri.PNG";

import { Link } from "react-router-dom";
import config from "../../Config/config";
import axios from "axios";
import InputPupilInfo from "./InputPupilInfo";
import pupilService from "../../Service/pupilService";

export default class ProtegesInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pupil: [],
      name: "",
      surname: "",
      email: "",
      growth: "",
      weight: "",
      age: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deletePupil = this.deletePupil.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    pupilService.updatePupil(this.state);
  };

  deletePupil(){
    pupilService.deletePupil()
  }

  componentDidMount() {
    let createUrlWithId;

    if (window.location.href.includes("/pupilInfo"))
      createUrlWithId = window.location.href.substr(32);
    axios
      .get(config.getPupilById + createUrlWithId)
      .then((res) => {
        this.setState({ pupil: res.data });
        window.localStorage.setItem("pupil", JSON.stringify(res.data));
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-gradient">
          <div className="row mr-0">
            <div className="col-5 text-center mt-5">
              <img id="img-rounded" src={piotri} />
              <p className="text-warning">
                {this.state.pupil.name + " " + this.state.pupil.surname}
              </p>
              <div>
                <p>
                  <button
                    type="button"
                    className="col-4 btn btn-outline-warning"
                  >
                    Dodaj trening
                  </button>
                </p>
                <p>
                  <Link to="/historyTraining">
                    <button
                      type="button"
                      className="col-4  btn btn-outline-warning"
                    >
                      Historia treningów
                    </button>
                  </Link>
                </p>
                <p id="position">
                  <form onSubmit={this.handleSubmit}>
                    <InputPupilInfo
                      nameField="Imie"
                      name="name"
                      typeField="text"
                      func={this.handleChange}
                      val={this.state.name}
                    />
                    <InputPupilInfo
                      nameField="Nazwisko"
                      name="surname"
                      typeField="text"
                      func={this.handleChange}
                      val={this.state.surname}
                    />

                    <InputPupilInfo
                      nameField="Email"
                      name="email"
                      typeField="email"
                      func={this.handleChange}
                      val={this.state.email}
                    />

                    <InputPupilInfo
                      nameField="Wzrost"
                      name="growth"
                      typeField="number"
                      func={this.handleChange}
                      val={this.state.growth}
                    />

                    <InputPupilInfo
                      nameField="Waga"
                      name="weight"
                      typeField="number"
                      func={this.handleChange}
                      val={this.state.weight}
                    />

                    <InputPupilInfo
                      nameField="Wiek"
                      name="age"
                      typeField="number"
                      func={this.handleChange}
                      val={this.state.age}
                    />
                    <button
                      type="submit"
                      className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                    >
                      Zmień
                    </button>
                    <button
                      type="button"
                      onClick={this.deletePupil}
                      className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                    >
                      Usuń
                    </button>
                  </form>
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
