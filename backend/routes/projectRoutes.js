import express from 'express';
const router = express.Router();
import { setProject } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';



router.route('/projects')
    .post(setProject)



export default router;