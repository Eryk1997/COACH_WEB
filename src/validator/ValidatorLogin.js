import { SetTrainer } from "../model/Trainer/SetTrainer";
import history from "../history/history";
 
export const ValidatorLogin = (response, email) => {
  if (response.data.success == "true") {
    SetTrainer(email);
    history.push('/proteges')

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("password").innerHTML = "";
  } else alert("Nie ma takiego konta lub złe hasło");
};



