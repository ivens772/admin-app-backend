import  express  from "express";
import { login, loginCode } from "../controllers/auth";

const router = express.Router();
router.post('/login/:email', login)
router.post('/login/:email/code', loginCode)


export default router