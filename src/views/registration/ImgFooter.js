/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import bench from "../../Pictures/registration/lawka.jpg";
import women from "../../Pictures/registration/kobieta.jpg";
import men from "../../Pictures/registration/mezczyzna.jpg";
import kick from "../../Pictures/registration/kop.jpg";


export default class ImgFooter extends Component {
    render() {
        return (
            <div className="row ml-4 mr-4 ">
              <img id="img-left" className="img-fluid col-3" src={bench} />
              <img id="padding-img" className="img-fluid col-3" src={kick} />
              <img id="padding-img" className="img-fluid col-3" src={men} />
              <img id="img-right" className="img-fluid col-3" src={women} />
            </div>
        )
    }
}
