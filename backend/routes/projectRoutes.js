import express from 'express';
const router = express.Router();
import { setProject, getAllProjects } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';



router.route('/')
    .post(setProject)
    .get(getAllProjects);

router.route('/:id')
    // .put(protect, updateProject)
    // .delete(protect, deleteProject);

export default router;