import express from 'express';
const router = express.Router();
import { setProject, getAllProjects, getSingleProject, updateProject } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';


// /api/projects/ +
router.route('/')
    .post(setProject)
    .get(getAllProjects);

// /api/projects/ +
router.route('/:id')
    .get(getSingleProject)
    .put(protect, updateProject)
    // .delete(protect, deleteProject);

export default router;