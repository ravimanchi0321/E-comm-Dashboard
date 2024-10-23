import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SignInPage.css"

const SignInPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const users = [
        { userName: "Ravi", password: "Ravi123", route: "/RaviPage" },
        { userName: "Girish", password: "Girish123", route: "/GirishPage" },
        { userName: "Vamshi", password: "Vamshi123", route: "/VamshiPage" },
    ]

    const handlSignIn = () => {
        const user = users.find(
            (user)=> user.userName === userName && user.password === password
        );

        if (user){
            navigate("/Home");
        }else{
            setError("Invaild credentials");
        }
    };
    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <div className="signin-form" style={{display:"table"}}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter username"
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                {error && <p className="error">{error}</p>}
                <button className="signin-btn" onClick={handlSignIn}>
                    Sign In
                </button>
            </div>
        </div>
    );
};
export default SignInPage;