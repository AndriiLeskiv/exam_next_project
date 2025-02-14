"use client";
import "./Menu.css"
import Link from "next/link";
import {useEffect, useState} from "react";
import {removeTokenFromStorage, retrieveTokenFromStorage} from "@/service/helpers";

export const Menu = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ firstName: string; image: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = retrieveTokenFromStorage("accessToken");
        const userData = retrieveTokenFromStorage<{ firstName: string; image: string }>("user");

        if (token) {
            setIsAuthenticated(true);
            if (userData) {
                setUser(userData);
            }
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }

        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        removeTokenFromStorage("accessToken");
        removeTokenFromStorage("refreshToken");
        removeTokenFromStorage("user");
        setIsAuthenticated(false);
        setUser(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <nav>
            <div className="logo">
                <Link href="/">MyApp</Link>
            </div>
            <ul>
                <li><Link href="/">Home</Link></li>
                {isAuthenticated ? (
                    <>
                        <li><Link href="/users">Users</Link></li>
                        <li><Link href="/recipes">Recipes</Link></li>
                        <li className="user-profile">
                            {user?.image && <img src={user.image} alt="User Logo" className="user-logo" />}
                            <span>{user?.firstName || "User"}</span>
                        </li>
                        <li><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : (
                    <li><Link href="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};