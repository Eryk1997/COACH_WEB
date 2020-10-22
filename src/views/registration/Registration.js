import React, { Component } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

import front from "../../Pictures/info/front.jpg";

import bench from "../../Pictures/registration/lawka.jpg";
import women from "../../Pictures/registration/kobieta.jpg";
import men from "../../Pictures/registration/mezczyzna.jpg";
import kick from "../../Pictures/registration/kop.jpg";

export default class Registration extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-gradient">
          <div className="row mr-0">
            <div className="row mb-5 mr-5 col-5">
              <img id="front-img" className="ml-5 mt-5" src={front} />
            </div>
            <div className="col-6 text-warning">
              <p id="wrapper-registration">Rejestracja</p>
              <div className="mt-4 ml-5 text-center">
                <form>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">
                      Nazwa
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-3 col-form-label">
                      Email
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputPassword3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-3 col-form-label">
                      Hasło
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="password"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-3 col-form-label">
                      Powtórz hasło
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="password"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputPassword3"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <Link className="" to="/login">
                      <button
                        type="button"
                        className="btn col-2 mr-3 mt-2 btn-outline-warning"
                      >
                        Zaloguj
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn col-2 mt-2 btn-outline-warning"
                    >
                      Rejestracja
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row ml-4 mr-4 ">
            <img id="img-left" className="img-fluid col-3" src={bench} />
            <img id="padding-img" className="img-fluid col-3" src={kick} />
            <img id="padding-img" className="img-fluid col-3" src={men} />
            <img id="img-right" className="img-fluid col-3" src={women} />
          </div>
        </header>
      </div>
    );
  }
}
