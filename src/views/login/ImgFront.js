/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

import front from "../../Pictures/info/front.jpg";

export default class ImgFront extends Component {
    render() {
        return (
            <div className="row mb-5 mr-5 col-5">
              <img id="front-img" className="ml-5 mt-5" src={front} />
            </div>
        )
    }
}
