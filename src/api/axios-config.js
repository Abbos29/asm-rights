import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Интерцепторы для обработки ошибок и токенов авторизации
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Обработка ошибок авторизации и других ошибок
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;