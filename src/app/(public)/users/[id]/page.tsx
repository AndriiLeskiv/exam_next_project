import { Metadata } from "next";
import { IUser } from "@/models/user/IUser";
import { IRecipes } from "@/models/recipes/IRecipes";
import { getAllRecipesForUser, getUserById } from "@/service/api.service";
import UserProfile from "@/components/user/UserProfile";

// Типізація параметрів як промісу
export type ParamsType = Promise<{ id: string }>;

// Генерація метаданих
export const generateMetadata = async ({ params }: { params: ParamsType }): Promise<Metadata> => {
    const { id } = await params;
    return {
        title: `User page title ${id}`,
    };
};

// Асинхронний компонент сторінки користувача
export default async function OneUserPage({ params }: { params: ParamsType }) {
    const { id } = await params;

    try {
        const selectedUser: IUser | null = await getUserById(+id);
        const userRecipes: IRecipes[] = await getAllRecipesForUser(+id);

        if (!selectedUser) {
            return <p>No user found.</p>;
        }

        return (
            <div>
                <UserProfile selectedUser={selectedUser} userRecipes={userRecipes} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching user or recipes:", error);
        return <p>Failed to load user and recipes. Please try again later.</p>;
    }
}