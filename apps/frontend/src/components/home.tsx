import React from "react";
import "./styles/home.css"

export const Home: React.FC =()=>{
    return(
        <div className="home-container">
            <h1>Welcome to the Authentication App</h1>
            <p>Please <a href="/login">Login</a> or <a href="/signup">Signup</a> to continue.</p>
        </div>
    )
}