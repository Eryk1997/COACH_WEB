import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

import front from "../../Pictures/info/front.jpg";
import gate from "../../Pictures/login/brama.jpg";
import women from "../../Pictures/login/kobieta.jpg";
import men from "../../Pictures/login/mezczyzna.jpg";
import squat from "../../Pictures/login/przysiad.jpeg";

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-gradient">
          <div className="row mr-0">
            <div className="row mb-5 mr-5 col-5">
              <img id="front-img" className="ml-5 mt-5" src={front} />
            </div>
            <div className="col-6 mt-5 text-warning">
              <div className="text-center">Logowanie</div>
              <div className="mt-4 ml-5">
                <form>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">
                      Password
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="password"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputPassword3"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn col-2 mr-4 mt-2 btn-outline-warning"
                    >
                      Zaloguj
                    </button>
                    <Link id="padding-buttons" to="/registration">
                      <button
                        type="button"
                        className="btn col-2 mt-2 btn-outline-warning"
                      >
                        Rejestracja
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row ml-4 mr-4 ">
            <img id="img-left" className="img-fluid col-3" src={gate} />
            <img id="padding-img" className="img-fluid col-3" src={squat} />
            <img id="padding-img" className="img-fluid col-3" src={men} />
            <img id="img-right" className="img-fluid col-3" src={women} />
          </div>
        </header>
      </div>
    );
  }
}
