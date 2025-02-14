"use client";
import "./login.css";
import {useEffect, useState} from "react";
import {retrieveTokenFromStorage} from "@/service/helpers";
import {loginUser} from "@/service/api.service";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const token = retrieveTokenFromStorage("accessToken");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await loginUser( username, password );
            setIsAuthenticated(true);
            router.push("/");
        } catch (err) {
            setError("Login failed: " + (err instanceof Error ? err.message : "Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-page">
            <h2>Authorization</h2>
            {isAuthenticated ? (
                <p>You are already logged in!</p>
            ) : (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Login"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Log in"}
                    </button>
                </form>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default LoginPage;