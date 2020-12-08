import React, { Component } from "react";

import "./AddTraining.css";

export default class AddTraining extends Component {
  render() {
    return (
      <div id="backgroundTraining" className="text-center text-warning">
        <form className="row mt-4 mb-4 mr-0">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ćwiczenie
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">
              Ławka
            </a>
            <a class="dropdown-item" href="#">
              Siady
            </a>
            <a class="dropdown-item" href="#">
              Biceps
            </a>
          </div>

          <input
            type="number"
            class="form-contro col-1 border-0 bg-secondary text-white text-center"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button type="button" class="btn btn-secondary">
            Ok
          </button>
        </form>
      </div>
    );
  }
}
