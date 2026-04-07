import express from "express";
import cors from "cors";
import db from "./services/config/dbconnection.js";
import router from "./services/routes/authroutes.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());


app.use("/auth" , router);

//creating a db connection.
async function startServer() {
  try {
    const dbConnection = await db.getConnection();
    console.log("Database connected successfully!!!");
    dbConnection.release();
    app.listen(port, () => {
      console.log(`Backend server is running on port ${port}`);
    });
  } catch (err) {
    console.log("error in connecting to database", err.message);
  }
}

startServer();
