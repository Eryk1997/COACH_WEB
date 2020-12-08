import React, { Component } from "react";
import "./AddPerson.css";
import { Link } from "react-router-dom";
import InputAddPupil from './InputAddPupil'
import ButtonAddPupil from './ButtonAddPupil'
import pupilService from '../../Service/pupilService'

export default class AddPerson extends Component {
  constructor(props){
    super(props)
    this.state ={
      name: "",
      surname: "",
      email: "",
      weight: "",
      growth: "",
      age: "",
      trainer: JSON.parse(localStorage.getItem('trainer'))
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    pupilService.addPupil(this.state.name,this.state.surname,this.state.email,this.state.weight,this.state.growth,this.state.age,this.state.trainer.id)
  };

  render() {
    return (
      <header className="background-addPerson container-flid">
        <form onSubmit={this.handleSubmit}>
          <div className="row ml-5 mr-0">
            <div className="col-6 text-center">
              <div className="row mr-0 justify-content-center text-warning">
                <div className="row mt-5 mb-5">Dodawanie podopiecznego</div>
              </div>
              <InputAddPupil InputName="Imie" func={this.handleChange} val={this.state.name} name="name" typeField="text"/>
              <InputAddPupil InputName="Nazwisko" func={this.handleChange} val={this.state.surname} name="surname" typeField="text"/>
              <InputAddPupil InputName="Email" func={this.handleChange} val={this.state.email} name="email"  typeField="email"/>
              <InputAddPupil InputName="Wzrost" func={this.handleChange} val={this.state.growth} name="growth" typeField="number"/>
              <InputAddPupil InputName="Waga" func={this.handleChange} val={this.state.weight} name="weight" typeField="number"/>
              <InputAddPupil InputName="Wiek" func={this.handleChange} val={this.state.age} name="age" typeField="number" />
              <ButtonAddPupil />
            </div>
          </div>
        </form>
      </header>
    );
  }
}
