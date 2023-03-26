
import axios from "axios";

export default axios.create({ baseURL: "https://localhost/" }); //라이브 서버

export const common = {
    baseURL: "https://localhost/",
};