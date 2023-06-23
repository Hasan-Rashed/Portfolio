import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';



// @desc    Set a new project
// @route   POST /api/projects
// @access  Public
const setProject = asyncHandler(async (req, res) => {
    const { name, category, description, clientName, technology, liveLink, githubLink, image } = req.body;

    // find project by email in the database
    const projectExists = await Project.findOne({ name });
    
    // check if project exists
    if(projectExists) {
        res.status(400); // bad request or client error
        throw new Error('Project already exists');
    }

    // create project in the database 
    const project = await Project.create({ 
        name, 
        category, 
        description, 
        clientName, 
        technology, 
        liveLink, 
        githubLink, 
        image
    });

    // check if project was created
    if(project) {
        res.status(201).json({ // 201 means something was created
            _id: project._id,
            name: project.name,
            category: project.category,
            description: project.description,
            clientName: project.clientName,
            technology: project.technology,
            liveLink: project.liveLink,
            githubLink: project.githubLink,
            image: project.image
        })
    }else{
        res.status(400); // bad request or client error
        throw new Error('Invalid project data');
    }
});




// @desc    Get all Projects
// @route   GET /api/projects
// @access  Public
const getAllProjects = asyncHandler(async (req, res) => { // we can access the project by req.project because of the protect middleware
    const projects = await Project.find();
    
    res.status(200).json(projects); // 200 means ok
});


export { 
    setProject,
    getAllProjects
};