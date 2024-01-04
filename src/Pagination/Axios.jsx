import axios from "axios";

export const JSON_PLACEHOLDER_URL = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPostPage = async (pageParam = 1) => {
  const response = await JSON_PLACEHOLDER_URL.get(`/posts?_page=${pageParam}`);
  return response.data;
};

export const REQURES_URL = axios.create({
  baseURL: "https://reqres.in/api",
});

export const getUserPage = async (pageParam = 1) => {
  const response = await REQURES_URL.get(`/users?page=${pageParam}`);
  return response.data;
};
