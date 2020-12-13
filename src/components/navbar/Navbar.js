import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

import Logout from '../../views/logout/Logout'

export default class Navbar extends Component {
  render() {
    if (!localStorage.getItem("trainer")) {
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
          <Link class="navbar-brand text-warning" to="/">
            <img
              className="rounded-circle img-fluid col-1"
              src={require("./logo.jpg")}
              alt=""
            />
            COACH
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link text-warning" to="/login">
                  Logowanie <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-warning" to="/">
                  Informacje
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    else{
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
        <Link class="navbar-brand text-warning" to="/">
          <img
            className="rounded-circle img-fluid col-1"
            src={require("./logo.jpg")}
            alt=""
          />
          COACH
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active col-3">
              <Link class="nav-link text-warning" to="/proteges">
                Osoby <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link text-warning" to="/addPerson">
                Dodaj osoby
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-warning" to="/settings">
                Ustawienia 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-warning" to="/">
                Informacje
              </Link>
            </li>
            <li class="nav-item mr-2">
              <Link class="nav-link text-warning" onClick={Logout} to="/login">
                Wyloguj
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      )
    }
  }
}
