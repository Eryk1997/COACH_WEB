
import axios from "axios";
import Cookies from "js-cookie";
import trainerService from '../../Service/trainerService'
import config from '../../Config/config'
import history from '../../history/history'

export default function Logout(){
    axios.get(config.logoutUrl)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
    trainerService.logout()
    Cookies.remove('status')
    history.push('/')
    window.location.reload()
}
