import api from "./axios.js";


export const fetchNotes = async() => {
    const response = await api.get("/notes")
    return response.data;
};








