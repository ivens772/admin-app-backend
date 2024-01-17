import  express  from "express";
import { getAll, create, getById, update} from "../controllers/clients";
import { valideteUser } from "../middleware/auth";

const router = express.Router();

router.use(valideteUser())

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)


export default router