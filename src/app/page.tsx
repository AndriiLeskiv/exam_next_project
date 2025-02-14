"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import {retrieveTokenFromStorage} from "@/service/helpers";

export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{ firstName: string; image: string } | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = retrieveTokenFromStorage<string>("accessToken");
        if (token) {
            setIsAuthenticated(true);
            const userData = retrieveTokenFromStorage<{ firstName: string; image: string }>("user");
            setUser(userData);
        }
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
      <div className="home-page">
        <h1>Welcome to My Website!</h1>
        {!isAuthenticated ? (
            <div className="auth-message">
              <p>To access more features, you need to <Link href="/login">log in</Link>.</p>
            </div>
        ) : (
            <div className="welcome-message">
                {user?.image && <img src={user.image} alt="User Logo" className="user-logo" />}
                {user?.firstName && <p>Welcome back, dear {user.firstName ? user.firstName : " user"}! Enjoy browsing our content.</p>}
            </div>
        )}
      </div>
  );
}
