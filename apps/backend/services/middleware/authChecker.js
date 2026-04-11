import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const authChecker = (req,res,next) =>{
    try{

        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).send({
                message: "Token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decodedToken = jwt.verify(
            token,
            process.env.TOKEN
        );

        req.user = decodedToken;

        next();

    }catch(err){
        res.status(401).send({
            message: "Unauthorized"
        })
    }
}