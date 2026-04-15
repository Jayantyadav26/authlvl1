import React from "react";
import { loginHandler } from "../handlers/apiHandler";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";


export const Login: React.FC =()=>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if(password.length < 8){
            alert("Password must be at least 8 characters long.");
            return;
        }

        const response = await loginHandler(email, password);

        if(response){
            localStorage.setItem("token", response.token);
            navigate("/dashboard");
        }else{
            alert(response.message || "Login failed. Please try again.");
        } 
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>   
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}