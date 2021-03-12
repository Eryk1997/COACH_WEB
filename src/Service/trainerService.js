import axios from "axios";
import config from "../Config/config";
import { ValidatorLogin } from "../validator/ValidatorLogin";
import { ValidatorAttributesLogin } from "../validator/ValidatorAttributesLogin";
import { ValidatorAttributesRegistration } from "../validator/ValidatorAttributesRegistration";
import { ValidatorRegistration } from "../validator/ValidatorRegistration";
import { ValidatorUpdateTrainer } from "../validator/ValidatorUpdateTrainer";
import history from "../history/history";

const headers = {
  "Content-Type": "application/json",
};

const trainerService = {
  login,
  logout,
  register,
  getById,
  updateTrainer,
  deleteTrainer,
};

function login(email, password) {
  const data = {
    email: email,
    password: password,
  };
  if (ValidatorAttributesLogin(email, password)) {
    axios
      .post(config.loginUrl, data, {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => ValidatorLogin(res, data.email))
      .catch((err) => {
        if (err.lenght > 0) console.log(err);
      });
  }
}

function logout() {
  localStorage.removeItem("trainer");
  localStorage.removeItem("pupil");
}

function register(trainer) {
  if (
    ValidatorAttributesRegistration(
      trainer.name,
      trainer.surname,
      trainer.email,
      trainer.password,
      trainer.passwordRepeat
    )
  )
    axios
      .post(
        config.registrationUrl,
        {
          name: trainer.name,
          surname: trainer.surname,
          password: trainer.password,
          email: trainer.email,
        },
        { headers: headers, withCredentials: true }
      )
      .then((res) => ValidatorRegistration(res.data, trainer.email))
      .catch((error) => console.log(error));
}

function deleteTrainer(id) {
  axios
    .delete(config.deleteTrainerByIDUrl + id)
    .then(alert("Delete trainer"))
    .catch((err) => console.log(err));
  history.push("/login");
  localStorage.removeItem("trainer");
  window.location.reload();
}

function getById(id) {
  const respone = axios.get(config.getTrainerById + id);
  const trainer = respone.then((respone) => respone.data);
  return trainer;
}

function updateTrainer(data) {
  let name = "";
  let surname = "";
  let email = "";
  let password = "";
  name =
    data.name === "" || data.trainer.name === data.name
      ? data.trainer.name
      : data.name;
  surname =
    data.surname === "" || data.trainer.surname === data.surname
      ? data.trainer.surname
      : data.surname;
  email =
    data.email === "" || data.trainer.email === data.email
      ? data.trainer.email
      : data.email;
  password =
    data.password === "" || data.trainer.password === data.password
      ? data.trainer.password
      : data.password;

  ValidatorAttributesRegistration(
    data.name,
    data.surname,
    data.email,
    data.password,
    data.passwordRepeat
  );
  axios
    .put(
      config.updateTrainerUrl + data.trainer.id,
      {
        name: name,
        surname: surname,
        email: email,
        password: password,
      },
      { headers: headers, withCredentials: true }
    )
    .then((res) => ValidatorUpdateTrainer(res.data, email))
    .catch((err) => console.log(err));
}

export default trainerService;
