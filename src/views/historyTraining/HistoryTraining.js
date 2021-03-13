import React, { Component } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import config from "../../Config/config";
import Frame from "./Frame";
import ReactPaginate from "react-paginate";

export default class HistoryTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      pupil: JSON.parse(window.localStorage.getItem("pupil")),

      offset: 0,
      elements: [],
      perPage: 4,
      currentPage: 0,
    };
  }

  receiveData() {
    axios
      .get(config.findDateTrainingByTrainingUrl + this.state.pupil.id)
      .then((json) =>
        this.setState(
          {
            contacts: json.data,
            pageCount: Math.ceil(json.data.length / this.state.perPage),
          },
          () => this.setElementsForCurrentPage()
        )
      )
      .catch((err) => console.log(err));
  }

  setElementsForCurrentPage() {
    let elements = this.state.contacts
      .slice(this.state.offset, this.state.offset + this.state.perPage)
      .map((post) => Frame(post));
    this.setState({ elements: elements });
  }

  handlePageClick = (data) => {
    const selectedPage = data.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState({ currentPage: selectedPage, offset: offset }, () => {
      this.setElementsForCurrentPage();
    });
  };

  componentDidMount() {
    this.receiveData();
  }
  render() {
    let paginationElement;
    if (this.state.pageCount > 1) {
      paginationElement = (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          forcePage={this.state.currentPage}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      );
    }
    return (
      <div className="App">
        <header className="container-fluid">
          <div className="text-center text-warning mt-3 mb-3">
            Historia Treningów
          </div>
          <div className="row text-warning text-center">
            {this.state.elements}
          </div>

          <div className="row">
            {paginationElement}
          </div>
        </header>
      </div>
    );
  }
  /*
    return (
      <div className="container">

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
  */
}
