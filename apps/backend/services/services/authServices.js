import bcrypt from 'bcrypt';
import db from '../config/dbconnection.js';

const saltRound = 10;

export async function signupService(data){
    const{email, password} = data;

    const hasedPassword = await bcrypt.hash(password,saltRound);

    await db.query("insert into auth(email,password) values(?, ?)",[email,hasedPassword]);

    return {
        status: 200,
        response:{
            message: "Successfully created a user"
        }
    }
}