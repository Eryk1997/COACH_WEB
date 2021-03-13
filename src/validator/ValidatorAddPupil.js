import history from "../history/history";

export function ValidatorAddPupil(data, url) {
  let elNameError = document.getElementById("errorName");
  let elSurnameError = document.getElementById("errorSurname");
  let elEmailError = document.getElementById("errorEmail");
  let elWeightError = document.getElementById("errorWeight");
  let elGrowthError = document.getElementById("errorGrowth");
  let elAgeError = document.getElementById("errorAge");

  if (data.length > 0) {
    //walidacja imienia
    if (data.includes("name is too short"))
      elNameError.innerHTML = "Imie jest za krótkie";
    else if (data.includes("name is too long"))
      elNameError.innerHTML = "Imie jest za długie";
    else if (data.includes("name contains illegal character"))
      elNameError.innerHTML = "Nieprawidłowe znaki";
    else if (data.includes("Name cannot be empty"))
      elNameError.innerHTML = "Imię nie może być puste";
    else elNameError.innerHTML = "";

    //walidacja nazwiska
    if (data.includes("surname is too short"))
      elSurnameError.innerHTML = "Nazwisko jest za krótkie";
    else if (data.includes("surname is too long"))
      elSurnameError.innerHTML = "Nazwisko jest za długie";
    else if (data.includes("surname contains illegal character"))
      elSurnameError.innerHTML = "Nieprawidłowe znaki";
    else if (data.includes("Surname cannot be empty"))
      elSurnameError.innerHTML = "Nazwisko nie może być puste";
    else elSurnameError.innerHTML = "";

    //walidacja email
    if (data.includes("email already exists"))
      elEmailError.innerHTML = "Trener o podanym adresie email istnieje";
    else if (data.includes("incorrect email address"))
      elEmailError.innerHTML = "Nieprawidłowe znaki";
    else if (data.includes("Email cannot be empty"))
      elEmailError.innerHTML = "Email nie może być pusty";
    else if (data.includes("email already exists"))
      elEmailError.innerHTML = "Email już jest zajęty";
    else elEmailError.innerHTML = "";

    //walidacja wzrostu
    if (data.includes("growth is too short"))
      elGrowthError.innerHTML = "Wzrost jest za niski";
    else if (data.includes("growth is too long"))
      elGrowthError.innerHTML = "Wzrost jest za duży";
    else if (data.includes("Growth cannot be empty"))
      elGrowthError.innerHTML = "Wzrost nie może być pusty";
    else elGrowthError.innerHTML = "";

    //walidacja wagi
    if (data.includes("weight is too short"))
      elWeightError.innerHTML = "Waga jest za niska";
    else if (data.includes("weight is too long"))
      elWeightError.innerHTML = "Wage jest za wysoka";
    else if (data.includes("Weight cannot be empty"))
      elWeightError.innerHTML = "Waga nie może być pusta";
    else elWeightError.innerHTML = "";

    //walidacja wagi
    if (data.includes("age is too short"))
      elAgeError.innerHTML = "Wiek jest za niski";
    else if (data.includes("age is too long"))
      elAgeError.innerHTML = "Wiek jest za wysoki";
    else if (data.includes("Age cannot be empty"))
      elAgeError.innerHTML = "Wiek nie może być pusty";
    else elAgeError.innerHTML = "";
  } else {
    history.push(url);
    window.location.reload(true);

    //czyszczenie
    elNameError.innerHTML = "";
    elSurnameError.innerHTML = "";
    elEmailError.innerHTML = "";
    elWeightError.innerHTML = "";
    elGrowthError.innerHTML = "";
    elAgeError.innerHTML = "";
  }
}
