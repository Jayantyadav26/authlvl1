import express from 'express';
import { signup, login, dashboard} from '../controllers/authController.js';
import {authChecker} from '../middleware/authChecker.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/dashboard", authChecker, dashboard);

export default router;