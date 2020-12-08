import axios from 'axios';

export function SetTrainer(email){
    axios.get("http://localhost:8080/trainers/" + email)
    .then(res => {
        let trainer = {
            id: res.data.id,
            name: res.data.name,
            surname: res.data.surname,
            password: res.data.password,
            email: res.data.email,
        }
        localStorage.setItem('trainer',JSON.stringify(trainer))
    });
}