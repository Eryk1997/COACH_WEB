/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import "./Login.css";
import Cookies from "js-cookie";

import Proteges from "../../views/proteges/Proteges";

import ImgFooter from "./ImgFooter";
import InputLogin from "./InputLogin";
import ImgFront from "./ImgFront";
import ButtonsLogin from "./ButtonsLogin";
import trainerService from '../../Service/trainerService'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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
    trainerService.login(this.state.email, this.state.password)
  };

  render() {
    if (!Cookies.get("status")) {
      return (
        <div className="App">
          <header className="">
            <div className="row mr-0">
              <ImgFront />
              <div className="col-6 mt-5 text-warning">
                <div className="text-center">Logowanie</div>
                <div className="mt-4 ml-5">
                  <form onSubmit={this.handleSubmit}>
                    <InputLogin
                      nameField="Email"
                      name="email"
                      func={this.handleChange}
                      val={this.state.email}
                    />
                    <InputLogin
                      nameField="Hasło"
                      name="password"
                      func={this.handleChange}
                      val={this.state.password}
                    />
                    <ButtonsLogin />
                  </form>
                </div>
              </div>
            </div>
            <div className="row ml-4 mr-4 ">
              <ImgFooter />
            </div>
          </header>
        </div>
      );
    } else {
      return <Proteges />;
    }
  }
}
