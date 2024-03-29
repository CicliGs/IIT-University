import axios from "axios"

export default class PostService{
    static async getAllPostsAsync(){
        const response = (await axios.get("http://localhost:8080/api/v1/posts")).data
        return response
    }
}