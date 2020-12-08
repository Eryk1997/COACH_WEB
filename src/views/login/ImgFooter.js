/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import gate from "../../Pictures/login/brama.jpg";
import women from "../../Pictures/login/kobieta.jpg";
import men from "../../Pictures/login/mezczyzna.jpg";
import squat from "../../Pictures/login/przysiad.jpeg";

export default class ImgFooter extends Component {
  render() {
    return (
      <div>
        <img id="img-left" className="img-fluid col-3" src={gate} />
        <img id="padding-img" className="img-fluid col-3" src={squat} />
        <img id="padding-img" className="img-fluid col-3" src={men} />
        <img id="img-right" className="img-fluid col-3" src={women} />
      </div>
    );
  }
}
