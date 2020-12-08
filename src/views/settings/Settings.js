import React, { Component } from "react";

import piotri from "../../Pictures/settings/piotri.PNG";
import "./Settings.css";
import trainerService from "../../Service/trainerService";
import InputSettings from "./InputSettings";
import ButtonsSettings from "./ButtonsSettings";
export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainer: JSON.parse(localStorage.getItem("trainer")),
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordRepeat: "",
    };
    this.reloadPage = this.reloadPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteTrainer = this.deleteTrainer.bind(this);
  }

  reloadPage() {
    window.location.reload(true);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  deleteTrainer(){
    trainerService.deleteTrainer(this.state.trainer.id)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("xd")
  };

  render() {
    return (
      <header className="App-gradient">
        {this.props.appointments}
        <div className="row mr-0 text-warning">
          <div className="ml-5 mt-5 col-4 text-center">
            <img id="img-settings" className="rounded-circle " src={piotri} />
            <p>
              {this.state.trainer.name}
              <div className="mt-2 text-center"></div>
            </p>
            <p>
              <form onSubmit={this.handleSubmit}>
                <InputSettings
                  nameField="Imię"
                  name="name"
                  typeInput="text"
                  func={this.handleChange}
                  val={this.state.name}
                />

                <InputSettings
                  nameField="Nazwisko"
                  name="surname"
                  typeInput="text"
                  func={this.handleChange}
                  val={this.state.surname}
                />

                <InputSettings
                  nameField="Email"
                  name="email"
                  typeInput="email"
                  func={this.handleChange}
                  val={this.state.email}
                />

                <InputSettings
                  nameField="Hasło"
                  name="password"
                  typeInput="password"
                  func={this.handleChange}
                  val={this.state.password}
                />

                <InputSettings
                  nameField="Powtórz hasło"
                  name="passwordRepeat"
                  typeInput="password"
                  func={this.handleChange}
                  val={this.state.passwordRepeat}
                />

                <ButtonsSettings func={this.deleteTrainer}/>
              </form>
            </p>
          </div>
        </div>
      </header>
    );
  }
}
