import axiosInstance from "@/service/axiosInstance";
import {IUserToken} from "@/models/IUserToken";
import {setTokenToStorage} from "@/service/helpers";
import {IUser} from "@/models/user/IUser";
import {IRecipes} from "@/models/recipes/IRecipes";

export const loginUser = async (username: string, password: string): Promise<IUserToken> => {
    try {
        const {data} = await axiosInstance.post("/login", {username, password});
        setTokenToStorage("accessToken", data.accessToken);
        setTokenToStorage("refreshToken", data.refreshToken);

        setTokenToStorage("user", {
            firstName: data.firstName,
            image: data.image,
        });

        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message || "Login failed");
        }
        throw new Error("Login failed");
    }
};

export const getAllUsers = async (page: number, query: string): Promise<{ users: IUser[], total: number }> => {
    try {
        const limit = 30;
        const skip = (page - 1) * limit;
        const {data} = await axiosInstance.get(`/users/search`, {
            params: { q: query, skip, limit },
        });
        return data;
    } catch (error) {
        console.error("Помилка отримання користувачів:", error);
        throw error;
    }
};

export const getUserById = async (id: number): Promise<IUser> => {
    try {
        const { data } = await axiosInstance.get<IUser>(`/users/${id}`);
        return data;
    } catch (error) {
        console.error("Помилка отримання користувача:", error);
        throw error;
    }
};

export const getAllRecipes = async (page: number, query: string): Promise<{
    recipes: IRecipes[],
    total: number
}> => {
    try {
        const limit = 30;
        const skip = (page - 1) * limit;
        const { data } = await axiosInstance.get(`/recipes/search`, {
            params: { q: query, skip, limit },
        });

        console.log('response', data)
        return data;
    } catch (error) {
        console.error("Помилка отримання рецептів:", error);
        throw error;
    }
};

export const getRecipesByTagApi = async (tag: string, page: number): Promise<{ recipes: IRecipes[], total: number }> => {
    try {
        const { data } = await axiosInstance.get(`/recipes/tag/${tag}`, {
            params: { page }
        });
        return data;
    } catch (error) {
        console.error("Помилка отримання рецептів за тегом:", error);
        throw error;
    }
};