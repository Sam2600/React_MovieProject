import axios from "axios";

const REQURES_URL = axios.create({
    baseURL: "https://reqres.in/api"
});


export const fetchUsers = async (pageParam) => {
    const response = await REQURES_URL.get(`/users?page=${pageParam}`)
    return response.data;
}