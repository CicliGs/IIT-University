import api from "../http";

export default class AuthService{
    static async login(username, password){
        return api.post('/authenticate', {username: username, password: password})
    }

    static async registration(username, password){
        return api.post('/register', {username: username, password: password})
    }

    static async logout(){
        return api.post('/logout')
    }
    static async refresh(){
        return api.post('http://localhost:8080/api/v1/auth/refresh-token')
    }
}