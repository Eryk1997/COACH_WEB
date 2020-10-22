import React, { Component } from "react";
import "./AddPerson.css";
import { Link } from "react-router-dom";

export default class AddPerson extends Component {
  render() {
    return (
      <header className="background-addPerson container-flid">
        <form>
          <div className="row ml-5 mr-0">
            <div className="col-6 text-center">
              <div className="row mr-0 justify-content-center text-warning">
                <div className="row mt-5 mb-5">Dodawanie podopiecznego</div>
              </div>
              <div class="form-group row text-warning">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Imie
                </label>
                <div className="col-sm-10">
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
                <div className="col-sm-10">
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
                <div className="col-sm-10">
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
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control col-4 bg-secondary text-white"
                  />
                </div>
              </div>
              <div class="form-group row text-warning">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Waga
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control col-4 bg-secondary text-white"
                  />
                </div>
              </div>
              <div class="form-group row text-warning">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Wiek
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control col-4 bg-secondary text-white"
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn col-2 mr-4 mt-2 btn-outline-warning"
              >
                Dodaj
              </button>
            </div>
          </div>
        </form>
      </header>
    );
  }
}
