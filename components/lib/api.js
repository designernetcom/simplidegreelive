import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your Laravel API URL
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

export const createPost = async (data) => {
  const response = await api.post("/posts", data);
  return response.data;
};

export default api;
