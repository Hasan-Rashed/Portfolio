import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';



// @desc    Set a new project
// @route   POST /api/projects
// @access  Public
const setProject = asyncHandler(async (req, res) => {

    let _id;
    
    const { name, category, description, clientName, technology, liveLink, githubLink, image } = req.body;

    // find project by email in the database
    const projectExists = await Project.findOne({ name });
    
    // check if project exists
    if(projectExists) {
        res.status(400); // bad request or client error
        throw new Error('Project already exists');
    }


    // get token from the cookie
    let token = req.cookies.jwt; // get token from the cookie

    // check if token exists
    if(token){
        try {
            // const decoded = jwt.verify(token, process.env.JWT_SECRET); // decode the token, decoded is an object. token is from the cookie
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            
            // Get the user ID from the token.
            _id = decodedToken.userId; // userId is the currently logged in user id, accessing from the cookie of jwt

        } catch (error) {
            res.status(401); // 401 means unauthorized
            throw new Error('Unauthorized access, invalid token');
        }
    }else{
        res.status(401); // 401 means unauthorized
        throw new Error('Unauthorized access, no token');
    }
    
    
    // create project in the database 
    const project = await Project.create({ 
        user: _id, // user field on Project model relationship to User model to create project
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
        res.status(201).json(project) // 201 Created
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



// @desc    Get single Project
// @route   GET /api/projects/:id
// @access  Public
const getSingleProject = asyncHandler(async (req, res) => { // we can access the project by req.project because of the protect middleware
    // find the id of the project by req.params.id
    const project = await Project.findById(req.params.id);
    
    res.status(200).json(project); // 200 means ok
});




export { 
    setProject,
    getAllProjects,
    getSingleProject,
    // updateProject
};