import {FC} from "react";
import {Metadata} from "next";
import UserProfile from "@/components/user/UserProfile";
import {IUser} from "@/models/user/IUser";
import {getUserById} from "@/service/api.service";
type Props = {
    params: { id: string }
    user: IUser;
}

export const generateMetadata = ({params}: Props): Metadata => {
    return {
        title: `User page title ${params.id}`,
    };
}

const UserPage: FC<Props> = async ({params}) => {
    const selectedUser:IUser = await getUserById(+params.id);
    console.log('selectedUser', selectedUser)

    return (
        <div>
            {selectedUser ? (
                <UserProfile selectedUser={selectedUser} />
            ) : (
                <p>No user found.</p>
            )}
        </div>
    );
};

export default UserPage;