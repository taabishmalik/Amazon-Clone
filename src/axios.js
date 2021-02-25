import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-3bc43/us-central1/api", //URL of the API(cloud function)
});

export default instance;
