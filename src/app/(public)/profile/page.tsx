import { getFromUser } from "@/service/api.service";
import { IUser } from "@/models/user/IUser";
import './AboutPage.css';

const AboutPage = async () => {
    const  data:IUser = await getFromUser();

    return (
        <div className="container">
            <h1 className="heading">About Me</h1>

            <div className="user-details">
                {data?.image && <img src={data.image} alt="User Avatar" className="avatar" />}
                <p>Name: {data?.firstName} {data?.lastName}</p>
                <p>Email: {data?.email}</p>
                <p>Username: {data?.username}</p>
                <p>Age: {data?.age}</p>
                <p>Gender: {data?.gender}</p>
                <p>Role: {data?.role}</p>
                <p>University: {data?.university}</p>
                <p>Blood Group: {data?.bloodGroup}</p>
                <p>Height: {data?.height} cm</p>
                <p>Eye Color: {data?.eyeColor}</p>
                <p>Phone: {data?.phone}</p>
                <p>MAC Address: {data?.macAddress}</p>
                <p>SSN: {data?.ssn}</p>
                <p>IP: {data?.ip}</p>
                <p>Birth Date: {data?.birthDate}</p>

                <div className="other-info">
                    <h2>Other Information</h2>
                    <p>EIN: {data?.ein}</p>
                    <p>User Agent: {data?.userAgent}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;