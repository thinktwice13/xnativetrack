import axios from "axios";

export default axios.create({
  baseURL: "https://cf7bd565.eu.ngrok.io", // closes in max 8 hours: FIXME: use env
});
