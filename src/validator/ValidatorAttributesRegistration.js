export function ValidatorAttributesRegistration(
    name,
    surname,
    email,
    password,
    passwordRepeat
){
    let elNameError = document.getElementById('errorName');
    let elSurnameError = document.getElementById('errorSurname');
    let elEmailError = document.getElementById('errorEmail');
    let elPasswordError = document.getElementById('errorPassword');
    let elPasswordRepeatError = document.getElementById('errorPasswordRepeat');

    if(
        name == "" ||
        surname == "" ||
        email == "" ||
        password == "" ||
        passwordRepeat == "" ||
        password != passwordRepeat
    ){
        if(!name) elNameError.innerHTML = "Uzupełnij imię";
        else elNameError.innerHTML = "";

        if(!surname) elSurnameError.innerHTML = "Uzupełnij nazwisko";
        else elSurnameError.innerHTML = "";

        if(!email) elEmailError.innerHTML = "Uzupełnij email";
        else elEmailError.innerHTML = "";
        
        if(!password) elPasswordError.innerHTML = "Uzupełnij hasło";
        else elPasswordError.innerHTML = "";

        if(password != "" && passwordRepeat == "")
        elPasswordRepeatError.innerHTML = "Powtórz hasło";
        else elPasswordRepeatError.innerHTML = "";

        if(password != passwordRepeat)
        elPasswordRepeatError.innerHTML = "Niezgodne hasło";
        else elPasswordRepeatError.innerHTML = ""

        return false
    } else {
        return true
    }

}