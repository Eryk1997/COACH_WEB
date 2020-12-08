import React, { Component } from "react";
import men from "../../Pictures/proteges/men.png";

export function Frame(date) {
  let name = date.name;
  let surname = date.surname;
  let email = date.email;
  let wage = date.wage;
  let growth = date.growth;
  let age = date.age;

  return (
    <div className="m-5 col-2">
      <div class="card bg-secondary">
        <img src={men} class="card-img-top" alt="..." />
        <div class="card-body text-center text-warning">
          <h5 class="card-title">{name + ' ' + surname}</h5>
          <button type="button" className="btn btn-outline-warning">
            Przejdź do konta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Frame;

