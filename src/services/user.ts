import api from './index';

class UserService {
  static async login(email: string, password: string, userType: "teacher" | "student" | "adm" ) {
    try {
        const response = await api.post('/users/login', { email, password, userType});
        return response.data;
    } catch (error) {
        throw error;
    }
  }
}

export default UserService;