import Cookies from 'js-cookie';


export function DeleteTrainer(res,props){
    Cookies.remove('email')
    window.location.reload()

}