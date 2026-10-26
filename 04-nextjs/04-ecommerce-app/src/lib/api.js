import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.team-sync.space",
  withCredentials: true
});

export default axiosInstance;
