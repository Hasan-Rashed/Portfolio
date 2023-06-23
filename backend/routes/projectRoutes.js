import express from 'express';
const router = express.Router();
import { setProject, getAllProjects } from '../controllers/projectController.js';
import { protect } from '../middleware/authMiddleware.js';



router.route('/projects')
    .post(setProject)
    .get(getAllProjects);

router.route('/projects/:id')
    // .put(protect, updateProject)
    // .delete(protect, deleteProject);

export default router;