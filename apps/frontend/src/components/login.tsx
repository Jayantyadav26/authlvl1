import React from "react";

export const Login: React.FC =()=>{
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if(password.length < 8){
            alert("Password must be at least 8 characters long.");
            return;
        }
        
    }

    return(
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">    
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}