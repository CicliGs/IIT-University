import api from "../http";
import axios from "axios";

export default class AuthService{
    static async login(username, password){
        return api.post('/authenticate', {username: username, password: password})
    }

    static async registration(username, password, role){
        return api.post('/register', {username: username, password: password, role: role})
    }

    static async logout(){
        return api.post('/logout')
    }
    static async refresh(){
        var token = localStorage.getItem('refresh_token')
        return axios.post('http://localhost:8080/api/v1/auth/refresh-token', {refreshToken: token})
    }
}