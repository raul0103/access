import api from "../index.js";

// Тестовый API сервис
export const testApi = {
  async getTest() {
    try {
      const response = await api.get("/");
      return response.data;
    } catch (error) {
      console.error("Ошибка при получении тестовых данных:", error);
      throw error;
    }
  },
};

export default testApi;
