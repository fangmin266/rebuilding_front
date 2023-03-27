
import axios from "axios";

// export default axios.create({ baseURL: "https://localhost/" }); //도커 서버
export default axios.create({ baseURL: "http://localhost:8000/" }); //8000 서버

export const common = {
    // baseURL: "https://localhost/",
    baseURL: "http://localhost:8000/",
};