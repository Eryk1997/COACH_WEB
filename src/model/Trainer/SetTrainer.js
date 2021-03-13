import axios from "axios";
import config from '../../Config/config'

export function SetTrainer(email) {
  axios.get(config.registrationUrl + email).then((res) => {
    let trainer = {
      id: res.data.id,
      name: res.data.name,
      surname: res.data.surname,
      password: res.data.password,
      email: res.data.email,
    };
    window.localStorage.setItem("trainer", JSON.stringify(trainer));

    if (window.localStorage.getItem("trainer") != null)
      document.location.reload(true);
  });
}
