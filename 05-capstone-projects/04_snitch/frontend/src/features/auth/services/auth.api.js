import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/auth`,
  withCredentials: true,
});

async function register({ fullName, email, password, contactNumber }) {
  const { data } = await api.post("/register", {
    fullName,
    email,
    password,
    contactNumber,
  });

  return data;
}

export { register };
