import React, { Component } from "react";
import { Link } from "react-router-dom";

export function Frame(date) {
    let day = date[2]
    let month = date[1]
    let year = date[0]

  return (
    <div className="col-sm-5 mt-4">
      <div className="card">
        <div className="card-body bg-secondary">
          <h5 className="card-title">{day + "." + month + "." + year + "r."}</h5>
          <Link to={"/historyInfo/" + year + "-" + month + "-" + day} >
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
  );
}

export default Frame;
