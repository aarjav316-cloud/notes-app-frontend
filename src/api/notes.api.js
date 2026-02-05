import api from "./axios.js";


export const fetchNotes = async() => {
    const response = await api.get("/notes")
    return response.data;
};

export const createNotes = async(formData) => {
    const response = await api.post("/notes" , formData)
    return response.data;
}

export const deleteNotes = async(id) => {
    const response  = await api.delete( `/notes${id}`)
    return response.data;
}








