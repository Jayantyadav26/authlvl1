export const signupHandler = async (email: string, password: string)=>{
    try{
        const response = await fetch(`http://localhost:8080/auth/signup`,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email,password})
        });

        if(response.status === 200){
            return response.json();
        }
        else{
            throw new Error("Signup failed");
        }
    }catch(error: any){
        console.error("Signup failed", error);
        return {
            message: "Signup failed. Please try again."
        }
    }
}

export const loginHandler = async (email: string, password: string)=>{
    try{
        const response = await fetch(`http://localhost:8080/auth/login`,{
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({email,password})
        })
        if(response.status === 200){
            return response.json();
        }else{
            throw new Error("login failed");
        }
    }catch(error:any){
        console.error("Login failed", error);
        return{
            message: "Login failed. Please try again."
        }
    }
}