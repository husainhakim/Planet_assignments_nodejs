import express from 'express'
import { add_Planet ,delete_Planet,search_Planet ,update_Planet } from '../controller/planetController.js';

const router = express.Router();

router.post("/add",add_Planet);
router.get("/planets/:name",search_Planet)
router.put("/planets/:name",update_Planet)
router.delete("/planets/:name",delete_Planet)


export default router