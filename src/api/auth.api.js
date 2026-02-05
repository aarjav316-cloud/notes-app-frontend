import api from "./axios.js";


export const loginUser = async(formData) => {
    const response = await api.post('/users/login' , formData)
    return response.data;
}

export const registerUser = async(formData) => {
    const response = await api.post('/users/register'  , formData)
    return response.data;
}
