import React, { Component } from "react";

import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
      <Link class="navbar-brand text-warning" to="/about">
      <img className="rounded-circle img-fluid col-1" src={require('./logo.jpg')} alt="" />
        COACH</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link text-warning" to="/login">Logowanie <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-warning" to="/about">Informacje</Link>
          </li>
        </ul>

      </div>
    </nav>
    );
  }
}
