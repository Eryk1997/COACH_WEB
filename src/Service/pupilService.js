import axios from "axios";
import config from "../Config/config";
import { ValidatorAddPupil } from "../validator/ValidatorAddPupil";
import history from "../history/history";

const headers = {
  "Content-Type": "application/json",
};

const pupilService = {
  addPupil,
  updatePupil,
  deletePupil,
  getPupil,
};

function addPupil(name, surname, email, weight, growth, age, id_trainer) {
  axios
    .post(
      config.addPupilByTrainerId,
      {
        name: name,
        surname: surname,
        email: email,
        weight: weight,
        growth: growth,
        age: age,
        id_trainer: id_trainer,
      },
      { headers: headers, withCredentials: true }
    )
    .then((res) => {
      ValidatorAddPupil(res.data, "/proteges");
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function updatePupil(data) {
  let name = "";
  let surname = "";
  let email = "";
  let weight = "";
  let growth = "";
  let age = "";
  name =
    data.name === "" || data.pupil.name === data.name
      ? data.pupil.name
      : data.name;
  surname =
    data.surname === "" || data.pupil.surname === data.surname
      ? data.pupil.surname
      : data.surname;
  email =
    data.email === "" || data.pupil.email === data.email
      ? data.pupil.email
      : data.email;
  weight =
    data.weight === "" || data.pupil.weight === data.weight
      ? data.pupil.weight
      : data.weight;
  growth =
    data.growth === "" || data.pupil.growth === data.growth
      ? data.pupil.growth
      : data.growth;
  age =
    data.age === "" || data.pupil.age === data.age ? data.pupil.age : data.age;

  console.log(name);
  axios
    .put(
      config.updatePupilUrl + data.pupil.id,
      {
        name: name,
        surname: surname,
        growth: growth,
        weight: weight,
        age: age,
        email: email,
      },
      { headers: headers, withCredentials: true }
    )
    .then((res) => ValidatorAddPupil(res.data, "/pupilInfo/" + data.pupil.id))
    .catch((err) => console.log(err));
}

function deletePupil() {
  let pupil = JSON.parse(window.localStorage.getItem("pupil"));
  axios
    .delete(config.deletePupilByIdUrl + pupil.id, {
      headers: headers,
      withCredentials: true,
    })
    .then((res) => {
      if (res.data) {
        window.localStorage.removeItem("pupil");
        history.push("/proteges");
        window.location.reload(true);
      }
    })
    .catch((err) => console.log(err));
}

function getPupil() {
  let pupil = JSON.parse(window.localStorage.getItem("pupil"));
  if (pupil != null) return pupil;
  else return "Nie znaleziono";
}

export default pupilService;
