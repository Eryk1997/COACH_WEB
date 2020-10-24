import React, { Component } from 'react'

import piotri from '../../Pictures/settings/piotri.PNG';
import './Settings.css'
import { Link } from "react-router-dom";


export default class Settings extends Component {
    render() {
        return (
            <header className="App-gradient">
            <div className="row mr-0 text-warning">
                <div className="ml-5 mt-5 col-4 text-center">
                <img id="img-settings" className="rounded-circle "  src={piotri} />
                <p>
                    <div className="mt-2 text-center">
                    Imie Nazwisko
                    </div>
                </p>
                <p>
                <form>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-4 col-form-label">
                      Imie
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label">
                      Nazwisko
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputPassword3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-4 col-form-label">
                      Hasło
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control col-8 bg-secondary text-white"
                        id="inputEmail3"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-4 col-form-label">
                      Powtórz hasło
                    </label>
                    <div className="col-sm-8">
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
                      className="btn  mt-2 btn-outline-warning"
                    >
                      Zapisz zmiany
                    </button>
                  </div>
                </form>
                </p>
                </div>
            </div>
            </header>
        )
    }
}
