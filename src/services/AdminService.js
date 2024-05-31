import api from "../http";

export default class AdminService {
  static async getAllUsers() {
    return api.get("../admin");
  }
}
