import { signupService, loginService } from "../services/authServices.js";


export async function signup(req, res){
    const result = await signupService(req.body);
    res.status(result.status).send(result.response);
}

export async function login(req, res){
    const result = await loginService(req.body);
    res.status(result.status).send(result.response);
}


export async function dashboard(req,res){
    res.send("Welcome to the dashboard").status(200);
}