import { useNavigate } from 'react-router-dom';
import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService"
import axios from "axios";
import { RiH1 } from "@remixicon/react"

const API_URL ='http://localhost:8080/api/v1/auth'

export default class Store{
    user = {}
    isAuth = false
    isLoading = false

    constructor(){
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    setUser(user){
        this.user = user
    }
    
    setLoading(bool){
        this.isLoading = bool
    }

    async login(username, password){
        try {
            //const response = await AuthService.login(username, password)
            const response = await axios.post(`${API_URL}/authenticate`, {username: username, password: password})
            console.log(response)
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            localStorage.setItem('username', response.data.userDTO.username)
            localStorage.setItem('role', response.data.userDTO.role)
            this.setAuth(true)
            this.setUser(response.data.userDTO)
        } catch (error) {
            console.log(error)
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try {
            const response = await AuthService.refresh()
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.setItem('refresh_token', response.data.refresh_token)
            this.setAuth(true)
            this.setUser(response.data.userDTO)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally{
            this.setLoading(false)
        }
    }

    async logout(){
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        this.setAuth(false)
    }
}