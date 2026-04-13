import React, { useState } from "react";
import { signupHandler } from "../handlers/apiHandler";

const Signup: React.FC =()=>{

    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const[successs, setSuccess] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>("");


    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(password.length < 8){
            alert("Password must be at least 8 characters long.");
            return;
        } 
        const response = await signupHandler(email, password);
        if(response){
            setSuccess(true);
            setMsg("Signup successful! Please login.");
        }
    }

    return(
        <div className="signup-container">
            <h1>Signup Now!!!</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required  onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required  onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
            {
                successs? (<p className="success-message">{msg}</p>):(<p>Already having an account? <a href="/login">Login here</a></p>)
            }
        </div>
    )
}

export default Signup;