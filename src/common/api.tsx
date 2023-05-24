import axios from "axios";

export default axios.create({
  baseURL: "https://localhost/",
  // withCredentials: true
}); //도커 서버

export const common = {
  baseURL: "https://localhost/",
  // withCredentials: true
};
