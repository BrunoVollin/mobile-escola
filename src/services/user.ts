import api from './index';

class UserService {
  static async login(email: string, password: string) {
    try {
        const response = await api.post('/teachers/login', { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
  }
}

export default UserService;