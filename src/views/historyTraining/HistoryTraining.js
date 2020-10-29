import React, { Component } from "react";

import { Link } from "react-router-dom";


export default class HistoryTraining extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center text-warning mt-3 mb-3">
          Historia Treningów
        </div>
        <div className="row text-warning text-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">24.10.2020r</h5>
                <p className="card-text">
                  Wykonano 5 ćwiczeń
                </p>
                <Link to="/historyInfo">
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">25.10.2020r</h5>
                <p className="card-text">
                Wykonano 3 ćwiczenia

                </p>
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 row text-warning text-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">24.10.2020r</h5>
                <p className="card-text">
                  Wykonano 5 ćwiczeń
                </p>
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">25.10.2020r</h5>
                <p className="card-text">
                Wykonano 3 ćwiczenia

                </p>
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5 text-warning text-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">24.10.2020r</h5>
                <p className="card-text">
                  Wykonano 5 ćwiczeń
                </p>
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body bg-secondary">
                <h5 className="card-title">25.10.2020r</h5>
                <p className="card-text">
                Wykonano 3 ćwiczenia

                </p>
                <button
                  type="button"
                  className="btn col-4 mr-4 mt-2 mb-4 btn-outline-warning"
                >
                  Szczegóły
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
