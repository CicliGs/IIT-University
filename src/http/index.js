import axios from "axios";


export const API_URL = 'http://localhost:8080/api/v1/auth'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if(error.response.status === 403 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            var token = localStorage.getItem('refresh_token')
            const refreshResponse = await axios.post('http://localhost:8080/api/v1/auth/refresh-token', {refreshToken: token})

            localStorage.setItem('access_token', refreshResponse.data.access_token)
            localStorage.setItem('refresh_token', refreshResponse.data.refresh_token)
            return api.request(originalRequest)
        } catch (e) {
            console.log("Не авторизован")
        }

    }
    throw error
})

export default api