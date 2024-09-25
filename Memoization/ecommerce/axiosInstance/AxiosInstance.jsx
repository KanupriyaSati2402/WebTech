import axios from "axios";

let Base_url = "http://localhost:5000";

let AxiosInstance = axios.create({
  baseURL: Base_url,
});

export default AxiosInstance;