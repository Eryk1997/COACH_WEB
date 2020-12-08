import axios from "axios";
import config from "../Config/config";
import { ValidatorAddPupil } from "../validator/ValidatorAddPupil";

const headers = {
  "Content-Type": "application/json",
};

const pupilService = {
  addPupil,
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
    .then((res) => ValidatorAddPupil(res.data))
    .catch((err) => console.log(err));
}

export default pupilService;
