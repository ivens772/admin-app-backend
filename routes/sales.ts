import  express  from "express";
import { create, getAll } from "../controllers/sales";
import { valideteUser } from "../middleware/auth";

const router = express.Router();

router.use(valideteUser())

router.get('/', getAll)    
router.post('/', create)    


export default router