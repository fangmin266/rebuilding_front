import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3600",
  // withCredentials: true
}); //도커 서버

export const common = {
  baseURL: "http://localhost:3600",
  // withCredentials: true
};
