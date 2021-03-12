import axios from "axios";
import config from "../Config/config";
import history from "../history/history";

const headers = {
  "Content-Type": "application/json",
};

const exerciseService = {
  getExercises,
};

async function getExercises() {
  let response = await axios.get(config.getExercises);
  let json = await response.data
    console.log(json);
  return json
}

export default exerciseService;
