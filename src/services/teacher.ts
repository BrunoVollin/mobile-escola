import api from './index';

export default class TeacherService {
    static async getClasses() {
        try {
            const response = await api.get('/teacher/class');
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
