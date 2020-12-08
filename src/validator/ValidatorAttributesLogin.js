export function ValidatorAttributesLogin(email,password){
    let elEmail = document.getElementById('errorEmail');
    let elPassword = document.getElementById('errorPassword');

    if( (email == '') || (password == '') ){
        if(email == '')
        elEmail.innerHTML = "Uzupełnij email użytkownika";
        else
        elEmail.innerHTML = "";

        if(password == '')
            elPassword.innerHTML = "Uzupełnij hasło";
        else
            elPassword.innerHTML = "";
        return false;
    }
    else
        return true;

   
}