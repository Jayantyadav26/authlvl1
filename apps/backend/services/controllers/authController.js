import { signupService, loginService } from "../services/authServices.js";
export async function signup(req,res){
    const result = await signupService(req.body);
    res.send(result.response).status(result.status);
}

export async function login(req,res){
    const result = await loginService(req.body);
    res.send(result.response).status(result.status);
}