import asyncHandler from 'express-async-handler';
import Project from '../models/projectModel.js';
import User from '../models/userModel.js';



// @desc    Set a new project
// @route   POST /api/projects
// @access  Private
const setProject = asyncHandler(async (req, res) => {

    const { name, category, description, clientName, technology, liveLink, githubLink, image } = req.body;

    // find if project exists by name in the database
    const projectExists = await Project.findOne({ name });
    
    // check if project exists
    if(projectExists) {
        res.status(400); // bad request or client error
        throw new Error('Project already exists');
    }


    // since setProject is a protected route, we can access the req.user._id from the protect middleware and assign to user
    const user = await User.findById(req.user._id).select('-password'); // we can access the req.user._id because of the protect middleware. .select('-password') is to exclude the password from the user object
    // console.log(user._id);
    
    // check for user
    if(!user){
        res.status(401) // 401 is unauthorized
        throw new Error('User not found')
    }

    
    // create project in the database 
    const project = await Project.create({ 
        user: user._id, // user field on Project model relationship to User model to create project
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




// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
    // find the id of the project by req.params.id
    const project = await Project.findById(req.params.id);
    // console.log(req.params.id);

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    // since updateProject is a protected route, we can access the req.user._id from the protect middleware and assign to user
    const user = await User.findById(req.user._id).select('-password'); // we can access the req.user._id because of the protect middleware. .select('-password') is to exclude the password from the user object
    // console.log(user._id);

    // check for user
    if(!user){
        res.status(401) // 401 is unauthorized
        throw new Error('User not found')
    }

    // update the project
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({ 
        success: true, 
        updatedProject
    })
})



// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {

    // find the id of the project by req.params.id
    const project = await Project.findById(req.params.id);

    if(!project){
        res.status(400)
        throw new Error('Project not found')
    }

    // since updateProject is a protected route, we can access the req.user._id from the protect middleware and assign to user
    const user = await User.findById(req.user._id).select('-password'); // we can access the req.user._id because of the protect middleware. .select('-password') is to exclude the password from the user object
    // console.log(user._id);

    // check for user
    if(!user){
        res.status(401) // 401 is unauthorized
        throw new Error('User not found')
    }

    // delete the project by req.params.id from the url
    await project.deleteOne({id: req.params.id});
    
    res.status(200).json({ 
        success: true, 
        id: req.params.id,
        message: 'project deleted successfully'
    })
});


export { 
    setProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
};