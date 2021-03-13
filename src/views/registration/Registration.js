import React, { Component } from "react";
import "./Registration.css";

import RegistrationButtons from './RegistrationButtons';
import ImgFooter from "./ImgFooter";
import ImgFront from "./ImgFront";
import InputRegistration from "./InputRegistration";

import Cookies from "js-cookie";
import Proteges from "../../views/proteges/Proteges";

import trainerService from '../../Service/trainerService'

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      passwordRepeat: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    trainerService.register(this.state);

  };

  render() {
    if (!Cookies.get("status")) {
      return (
        <div className="App">
          <header className="App-gradient">
            <div className="row mr-0">
              <ImgFront />
              <div className="col-6 text-warning">
                <p id="wrapper-registration">Rejestracja</p>
                <div className="mt-4 ml-5 text-center">
                  <form onSubmit={this.handleSubmit}>
                    <InputRegistration
                      fieldName="Imie"
                      name="name"
                      type="text"
                      func={this.handleChange}
                      value={this.state.name}
                    />

                    <InputRegistration
                      fieldName="Nazwisko"
                      name="surname"
                      type="text"
                      func={this.handleChange}
                      value={this.state.surname}
                    />
                    
                    <InputRegistration
                      fieldName="Email"
                      name="email"
                      type="email"
                      func={this.handleChange}
                      value={this.state.email}
                    />
                    
                    <InputRegistration
                      fieldName="Hasło"
                      name="password"
                      type="password"
                      func={this.handleChange}
                      value={this.state.password}
                    />
                   
                   <InputRegistration
                      fieldName="Powtórz Hasło"
                      name="passwordRepeat"
                      type="password"
                      func={this.handleChange}
                      value={this.state.passwordRepeat}
                    />

                  <RegistrationButtons />
                  </form>
                </div>
              </div>
            </div>
            <ImgFooter />
          </header>
        </div>
      );
    } else {
      return <Proteges />;
    }
  }
}
