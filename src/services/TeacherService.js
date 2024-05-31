import api from "../http"

export default class TeacherService{
    static async get(){
        return api.get('../teacher')
    }

    static async getAllLabs(){
        return api.get('../fileSystem/getLabWorks')
    }

    static async getAllMaterials(){
        return api.get('../fileSystem/getAllMaterials')
    }

    static async getAllExamQuestions(){
        return api.get('../fileSystem/getExamQuestions')
    }

    static async getDisciplines(){
        return api.get('../fileSystem/getDisciplines')
    }
}