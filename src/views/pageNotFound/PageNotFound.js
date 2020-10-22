import React, { Component } from "react";
import "./PageNotFound.css";

import { Link } from "react-router-dom";

import first from '../../Pictures/info/lawka.jpg'
import second from '../../Pictures/info/kop.jpg'
import third from '../../Pictures/info/Motivational-Gym-Man-Training-Poster-Various-Sizes.jpg'

export default class PageNotFound extends Component {
  render() {
    return (
      <header className="App-gradient container-fluid">
        <div className="row justify-content-center">
          <div className="row mt-5 mb-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide col-4"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    id="img-radius"
                    className="d-block w-100"
                    src={first}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    id="img-radius"
                    className="d-block w-100"
                    src={second}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    id="img-radius"
                    className="d-block w-100"
                    src={third}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
            <Link to="/login">
        <button
                      type="button"
                      className="btn col-2 mr-4 mt-2 btn-outline-warning"
                    >
                      Zaloguj
                    </button>
        
                    </Link>
        </div>
      </header>
    );
  }
}
