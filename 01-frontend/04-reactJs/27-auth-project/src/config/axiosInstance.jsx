import axios from "axios";

const api = axios.create({
  baseURL: `http://fakestoreapi.com`,
});

api.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  },
);
api.interceptors.request.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
  },
);
