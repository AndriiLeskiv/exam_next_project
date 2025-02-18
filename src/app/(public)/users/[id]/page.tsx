import {FC} from "react";
import {Metadata} from "next";
import {IUser} from "@/models/user/IUser";
import {getAllRecipesForUser, getUserById} from "@/service/api.service";
import UserProfile from "@/components/user/UserProfile";
import {IRecipes} from "@/models/recipes/IRecipes";

type Props = {
    params: { id: string }
    user: IUser;
    userRecipes: IRecipes[];
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `User page title ${params.id}`,
    };
}

const UserPage: FC<Props> = async ({params}) => {
    try {
        const selectedUser: IUser = await getUserById(+params.id);
        const userRecipes: IRecipes[] = await getAllRecipesForUser(+params.id);

        return (
            <div>
                {selectedUser ? (
                    <UserProfile selectedUser={selectedUser}  userRecipes={userRecipes}/>
                ) : (
                    <p>No user found.</p>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error fetching user or recipes:", error);
        return <p>Failed to load user and recipes. Please try again later.</p>;
    }
};

export default UserPage;