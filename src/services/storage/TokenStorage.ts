import AsyncStorage from '@react-native-async-storage/async-storage';

class TokenStorage {
  private readonly TOKEN_KEY = 'token';

  async saveToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(this.TOKEN_KEY, token);
    } catch (error) {
      console.log('Erro ao salvar o token:', error);
    }
  }

  async getToken(): Promise<string | null> {
    try {
      const token = await AsyncStorage.getItem(this.TOKEN_KEY);
      if (token !== null) {
        return token;
      } else {
        console.log('Token não encontrado');
        return null;
      }
    } catch (error) {
      console.log('Erro ao recuperar o token:', error);
      return null;
    }
  }

  async deleteToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem(this.TOKEN_KEY);
    } catch (error) {
      console.log('Erro ao remover o token:', error);
    }
  }

  async updateToken(newToken: string): Promise<void> {
    try {
      await AsyncStorage.mergeItem(this.TOKEN_KEY, newToken);
    } catch (error) {
      console.log('Erro ao atualizar o token:', error);
    }
  }
}

export default TokenStorage;
