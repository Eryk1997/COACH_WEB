import React, { Component } from "react";
import "./Proteges.css";
import axios from "axios";
import config from "../../Config/config";
import Frame from "./Frame";
import ReactPaginate from "react-paginate";

export default class Proteges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      trainer: JSON.parse(localStorage.getItem("trainer")),

      offset: 0,
      elements: [],
      perPage: 8,
      currentPage: 0,
    };
  }

  receiveData() {
    axios
      .get(config.getPupilsByTrainerId + this.state.trainer.id)
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

  componentDidMount() {
    this.receiveData();
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
          <div className="row">
          {this.state.elements}
          </div>
          <div className="row">
          {paginationElement}
          </div>
        </header>
      </div>
    );
  }
}
