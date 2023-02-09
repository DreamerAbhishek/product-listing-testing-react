import axios from "axios";

export default axios.create({
  baseURL: "https://nick.wpweb.co.in/api",
  headers: {
    "Content-type": "application/json",
  },
});
