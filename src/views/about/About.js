import React, { Component } from 'react'

import "./About.css";

import first from '../../Pictures/info/lawka.jpg'
import second from '../../Pictures/info/kop.jpg'
import third from '../../Pictures/info/Motivational-Gym-Man-Training-Poster-Various-Sizes.jpg'
import front from '../../Pictures/info/front.jpg';


export default class About extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-gradient">
            <div className="row mr-0">
        <div className="row mr-5 col-5">
        <img id="front-img" className="ml-5 mt-5" src={front}/>
        </div>
        <div className="mt-5 col-6 text-warning text-center">
          <p id="info-padding">Informacje</p>
          <p>Aplikacja powstała w celu projektu pracy inżynierskiej.</p>
            <p>Wszystkie niezbędne elementy
            oraz poszczególne zmiany będą widoczne na stronie.</p> 
        </div>
        </div>
        <div className="row mr-0 mb-3">
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
                <img id="img-radius" className="d-block w-100" src={first} alt="First slide" />
              </div>
              <div className="carousel-item">
                <img id="img-radius" className="d-block w-100" src={second} alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img id="img-radius" className="d-block w-100" src={third} alt="Third slide" />
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
      </header>
      </div>
        )
    }
}
