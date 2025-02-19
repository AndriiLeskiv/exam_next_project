import UsersContainer from "@/components/user/UsersContainer";
import {Suspense} from "react";

const UsersPage = () => {
    return (
        <Suspense fallback={<p>Loading users...</p>}>
            <UsersContainer />
        </Suspense>
    );
};

export default UsersPage;