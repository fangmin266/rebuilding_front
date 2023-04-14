import axios from "axios";

// export default axios.create({ baseURL: "http://192.168.0.70:3600/" }); //도커 서버

export default axios.create({
  baseURL: "http://192.168.0.70:3600/"
  // withCredentials: true
}); //도커 서버
// export default axios.create({ baseURL: "http://15.165.161.246:3600/" }); //8000 서버

export const common = {
  baseURL: "http://192.168.0.70:3600/"
  // withCredentials: true
  // baseURL: "http://15.165.161.246:3600/",
};
