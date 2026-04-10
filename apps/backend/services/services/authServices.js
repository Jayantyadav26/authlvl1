import bcrypt from 'bcrypt';
import db from '../config/dbconnection.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();
const saltRound = 10;

export async function signupService(data){
    const{email, password} = data;
    const hasedPassword = await bcrypt.hash(password,saltRound);
    try{
    await db.query("insert into auth(email,password) values(?, ?)",[email,hasedPassword]);

    return {
        status: 200,
        response:{
            message: "Successfully created a user"
            }
        }
    }catch(err){
        return{
            status: 500,
            response:{
                message: "Something went wrong"
            }
        }
    }
}


export const loginService = async (data) =>{
    const {email, password} = data;

    try{
        const [user] = await db.query("select * from auth where email=?", [email]);
        if(user.length === 0){
            return {
                status: 400,
                response:{
                    message: "User not found"
                }
            }
        }

        if(await bcrypt.compare(password,user[0].password)){
            const token = jwt.sign({id: user[0].id}, process.env.TOKEN,{expiresIn: "1h"});
            return{
                status:200,
                response:{
                    message: "Login successful",
                    token: token
                }
            }
        }

        return{
            status: 400,
            response:{
                message: "Invalid credentials!!!"
            }
        }

    }catch(err){
        return {
            status: 500,
            response:{
                message:"Something went wrong"
            }
        }
    }
}