import axios from "axios";
import { retrieveTokenFromStorage, setTokenToStorage } from "./helpers";

// Створення екземпляра axios з базовим URL
const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    // withCredentials: true
});

// Перехоплювач запитів для додавання токену в заголовки
axiosInstance.interceptors.request.use(
    (config) => {
        const token = retrieveTokenFromStorage<string>("accessToken");
        console.log("Token в interceptors.request:", token);

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Перехоплювач відповідей для обробки помилок
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Перевіряємо, чи є помилка авторизації (401)
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = retrieveTokenFromStorage<string>("refreshToken");

            if (!refreshToken) {
                return Promise.reject(error);
            }

            try {
                // Запит на оновлення токену
                const response = await axiosInstance.post("/refresh", {
                    refreshToken,
                });

                const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

                // Оновлюємо токени в cookies
                setTokenToStorage("accessToken", newAccessToken);
                setTokenToStorage("refreshToken", newRefreshToken);

                // Додаємо новий токен в заголовок для повторного запиту
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

                return axiosInstance(originalRequest); // Повторно виконуємо запит
            } catch (err) {
                console.error("Не вдалося оновити токен", err);
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;