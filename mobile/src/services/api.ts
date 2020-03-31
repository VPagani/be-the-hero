import Axios from "axios";

export default Axios.create({
    baseURL: "http://192.168.1.78:3333"
});