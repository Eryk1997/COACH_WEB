import axios from "axios";
import config from "../Config/config";
import {ValidatorLogin} from '../validator/ValidatorLogin'
import {ValidatorAttributesLogin} from '../validator/ValidatorAttributesLogin'
import {ValidatorAttributesRegistration} from '../validator/ValidatorAttributesRegistration'
import {ValidatorRegistration} from '../validator/ValidatorRegistration'
import history from '../history/history'
const headers = {
    "Content-Type": "application/json",
  };

const trainerService = {
  login,
  logout,
  register,
  //getAll,
   getById,
  // update,
  deleteTrainer,
};

function login(email, password) {


  const data = {
    email: email,
    password: password,
  };
  if(ValidatorAttributesLogin(email,password)){
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
}
/*
function getById(id) {
  axios.get(config.getTrainerById + id)
  .then(res => console.log(res))
  .catch(err => console.log(err))  
}
*/

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
        name: trainer.name ,
        surname: trainer.surname,
        password: trainer.password,
        email: trainer.email
      },
      { headers: headers, withCredentials: true }
    )
    .then((res) => ValidatorRegistration(res.data, trainer.email))
    .catch((error) => console.log(error));
}

function deleteTrainer(id){
  axios.delete(config.deleteTrainerByIDUrl+id)
  .then(alert("Delete trainer"))
  .catch(err => console.log(err))
  history.push('/login')
  localStorage.removeItem("trainer");
  window.location.reload()
}

function getById(id) {
  const respone = axios.get(config.getTrainerById + id)
  const trainer = respone.then(respone => respone.data)
  return trainer;
}

/*
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

   // return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}


function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    //return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
    */
export default trainerService;
