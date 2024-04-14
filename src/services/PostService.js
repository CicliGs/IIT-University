import axios from "axios"

// ============ Разместить в отдельном файле ============
const API_URL = 'http://localhost:8080/api/v1'
const api = axios.create({
    withCredentials: true, //Методы put и delete с withCredentials не работают, почему?
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})


const apiWithoutCredentials = axios.create({
    baseURL: API_URL
})

apiWithoutCredentials.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})
//=======================================================

export default class PostService{
    static async getAllPostsAsync(){
        const response = (await axios.get("http://localhost:8080/api/v1/posts")).data
        return response
    }

    static async createNewPost(Title, Text){
        return api.post('/posts', {
            title: Title,
            text: Text
        })
    }

    static async deletePost(id){
        return apiWithoutCredentials.delete(`/posts/${id}`)
    }

    static async editPost(id, Title, Text){
        return (apiWithoutCredentials.put(`/posts/${id}`, {
            title: Title,
            text: Text
        })).data
    }

    static async getPostById(id){
        return (await apiWithoutCredentials.get(`/posts/${id}`)).data
    }
}