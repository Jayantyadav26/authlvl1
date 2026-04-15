import React from "react";

export const Dashboard: React.FC =()=>{
    return(
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <p>This is a protected route. Only authenticated users can see this.</p>
        </div>
    )
}