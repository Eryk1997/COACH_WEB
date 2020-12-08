import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class RegistrationButtons extends Component {
    render() {
        return (
            <div className="text-center">
            <Link className="" to="/login">
              <button
                type="button"
                className="btn col-2 mr-3 mt-2 btn-outline-warning"
              >
                Zaloguj
              </button>
            </Link>
            <button
              type="submit"
              className="btn col-2 mt-2 btn-outline-warning"
            >
              Zarejestruj
            </button>
          </div>
        )
    }
}
