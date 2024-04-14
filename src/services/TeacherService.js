
import axios from "axios"

export default class TeacherService{
    static async get(){
        const API_URL = 'http://localhost:8080/api/v1'
        const api = axios.create({
            withCredentials: true,
            baseURL: API_URL
        })
        
        api.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
            return config
        })
        return api.get('/teacher')
    }
}