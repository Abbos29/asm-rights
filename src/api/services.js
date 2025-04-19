import apiClient from "./axios-config";

// Пример сервисов для работы с данными
export const postService = {
  getAll: () => apiClient.get('/posts/'),
  getById: (id) => apiClient.get(`/posts/${id}/`),
  create: (data) => apiClient.post('/posts/', data),
  update: (id, data) => apiClient.put(`/posts/${id}/`, data),
  delete: (id) => apiClient.delete(`/posts/${id}/`),
};

export const userService = {
  login: (credentials) => apiClient.post('/auth/token/', credentials),
  getProfile: () => apiClient.get('/users/me/'),
  // и другие методы для работы с пользователями
};

// Добавьте здесь другие сервисы по мере необходимости