import { IUser } from "@/models/user/IUser";
import { FC } from "react";

type Props = {
    selectedUser: IUser;
};

const UserProfile: FC<Props> = ({ selectedUser }) => {
    console.log("selectedUser", selectedUser);

    return (
        <div className="details_result">
            <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
            <img src={selectedUser.image} alt={selectedUser.firstName} width="100"/>
            <p>Email: {selectedUser.email}</p>
            <p>Phone: {selectedUser.phone}</p>
            <p>Gender: {selectedUser.gender}</p>
            <p>Date of birth: {selectedUser.birthDate}</p>
            <p>University: {selectedUser.university}</p>
            <p>Country: {selectedUser.eyeColor}</p>
            <p>Status: {selectedUser.age}</p>
            <p>Role: {selectedUser.role}</p>
            <p>User IP: {selectedUser.ip}</p>

            <h3>User recipes:</h3>
            {/*{userRecipes.length > 0 ? (*/}
            {/*    <ul>*/}
            {/*        {userRecipes.map((recipe) => (*/}
            {/*            <li key={recipe.id}>*/}
            {/*                <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*) : (*/}
            {/*    <p>No recipes found.</p>*/}
            {/*)}*/}
        </div>
    );
};

export default UserProfile;