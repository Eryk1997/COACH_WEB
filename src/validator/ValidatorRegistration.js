import Cookies from 'js-cookie';
import {SetTrainer} from '../model/Trainer/SetTrainer'

export function ValidatorRegistration(data, email){
    let elNameError = document.getElementById('errorName');
    let elSurnameError = document.getElementById('errorSurname');
    let elEmailError = document.getElementById('errorEmail');
    let elPasswordError = document.getElementById('errorPassword');
    let elPasswordRepeatError = document.getElementById('errorPasswordRepeat');

    if(data.length > 0){
        //walidacja imienia
        if(data.includes("name is too short"))
            elNameError.innerHTML = "Imie jest za krótkie";
        else if(data.includes("name is too long"))
            elNameError.innerHTML = "Imie jest za długie";
        else if(data.includes("name contains illegal character"))
            elNameError.innerHTML = "Nieprawidłowe znaki";
        else elNameError.innerHTML = "";

        //walidacja nazwiska
        if(data.includes("surname is too short"))
            elSurnameError.innerHTML = "Nazwisko jest za krótkie";
        else if(data.includes("surname is too long"))
            elSurnameError.innerHTML = "Nazwisko jest za długie";
        else if(data.includes("surname contains illegal character"))
            elSurnameError.innerHTML = "Nieprawidłowe znaki";
        else elSurnameError.innerHTML = "";

        //walidacja email
        if(data.includes("email already exists"))
            elEmailError.innerHTML = "Trener o podanym adresie email istnieje";
        else if(data.includes("incorrect email address"))
            elEmailError.innerHTML = "Nieprawidłowe znaki";
        else elEmailError.innerHTML = "";

        //walidacja hasła
        if(data.includes("password is too short"))
            elPasswordError.innerHTML = "Hasło jest za krótkie";
        else if(data.includes("password is too long"))
            elPasswordError.innerHTML = "Hasło jest za długie";
        else if(data.includes("password contains illegal character"))
            elPasswordError.innerHTML = "Hasło zawiera nieprawidłowe znaki";
        else elPasswordError.innerHTML = "";

        

    }
    else{
        alert("Zarejestrowano");
        Cookies.set('status',true);
        SetTrainer(email);
        window.location.reload()

        //trainer.login(() => props.history.push('/proteges'))


        //czyszczenie
        elNameError.innerHTML = "";
        elSurnameError.innerHTML = "";
        elEmailError.innerHTML = "";
        elPasswordError.innerHTML = "";
        elPasswordRepeatError.innerHTML = "";
    }
}