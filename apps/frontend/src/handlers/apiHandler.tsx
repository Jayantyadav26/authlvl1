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
    }
}