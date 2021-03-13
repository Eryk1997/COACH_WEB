import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ButtonsLogin extends Component {
    render() {
        return (
            <div className="text-center">
            <button
              type="submit"
              id="buttonLogin"
              className="btn col-2 mr-4 mt-2 btn-outline-warning"
            >
              Zaloguj
            </button>
            <Link id="padding-buttons" to="/registration">
              <button
                type="button"
                className="btn col-2 mt-2 btn-outline-warning"
              >
                Rejestracja
              </button>
            </Link>
          </div>
        )
    }
}
