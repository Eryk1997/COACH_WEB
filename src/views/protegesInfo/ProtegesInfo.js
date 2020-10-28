import React, { Component } from "react";

import "./ProtegesInfo.css";
import piotri from "../../Pictures/protegesInfo/piotri.PNG";

export default class ProtegesInfo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-gradient">
          <div className="row mr-0">
            <div className="col-5 text-center mt-5">
              <img id="img-rounded" src={piotri} />
              <p className="text-warning">Imie Nazwisko</p>
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
                  <button
                    type="button"
                    className="col-4  btn btn-outline-warning"
                  >
                    Historia treningów
                  </button>
                </p>
                <p id="position">
                <div class=" form-group row text-warning">
                  <label for="inputEmail3" class=" col-sm-2 col-form-label">
                    Imie
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>
                <div class="form-group row text-warning">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">
                    Nazwisko
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>

                <div class="form-group row text-warning">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>
                <div class="form-group row text-warning">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">
                    Wzrost
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>
                <div class="form-group row text-warning">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">
                    Waga
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>
                <div class="form-group row text-warning">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">
                    Wiek
                  </label>
                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control col-8 bg-secondary text-white"
                    />
                  </div>
                </div>
                </p>

                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Zmień
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
