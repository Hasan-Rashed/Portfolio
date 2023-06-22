import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc    Auth user/set token / or login user
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
    // get email and password from the body
    const { email, password } = req.body;

    // find user by email in the database
    const user = await User.findOne({ email });

    // check if user exists. we are checking passwords in the User model.
    if(user && (await user.matchPassword(password))) { // matchPassword is a custom method associated with userSchema in userModel.js. password is the plain text password. it return true or false
        generateToken(res, user._id); // set cookie with response.cookie in the browser with the token and the name is 'jwt'. res and user._id goes to generateToken.js

        res.status(201).json({ // 201 means something was created
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(401); // 401 means unauthorized
        throw new Error('Invalid email or password');
    }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // find user by email in the database
    const userExists = await User.findOne({ email });
    
    // check if user exists
    if(userExists) {
        res.status(400); // bad request or client error
        throw new Error('User already exists');
    }

    // create user in the database 
    const user = await User.create({ 
        name, 
        email, 
        password 
    });

    // check if user was created
    if(user) {
        generateToken(res, user._id); // set cookie with response.cookie in the browser with the token and the name is 'jwt'. res and user._id goes to generateToken.js

        res.status(201).json({ // 201 means something was created
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400); // bad request or client error
        throw new Error('Invalid user data');
    }
});

// @desc    Logout user
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {

    // clear cookie
    res.cookie('jwt', '', { // set jwt cookie to empty string
        httpOnly: true, // cookie cannot be accessed by client side script
        expires: new Date(0), // cookie expires immediately
    })
    
    res.status(200).json({ // 200 means ok
        message: 'Logged out successfully!' 
    });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => { // we can access the user by req.user because of the protect middleware
    // console.log(req.user);
// req.user is only available to the protected routes, in this case getUserProfile and updateUserProfile
    const user = {
        _id: req.user._id, // req.user is the current user with userId. userId is there because, we generate token in function with userId as 'payload'
        name: req.user.name, 
        email: req.user.email
    }
    
    res.status(200).json(user); // 200 means ok
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    // console.log(req.user);
    // req.user is only available to the protected routes, in this case getUserProfile and updateUserProfile

    const user = await User.findById(req.user._id); // we can access the req.user._id because of the protect middleware

    // check if user exists
    if(user) {
        // update user name and email
        user.name = req.body.name || user.name; // if req.body.name is empty, then use user.name
        user.email = req.body.email || user.email; // if req.body.email is empty, then use user.email

        // check if password is provided
        if(req.body.password){
            user.password = req.body.password; // set new password. password is hashed in the userModel.js. we cannot use req.user because it doesn't have a password field.
        }

        // save user with updated name, email and password
        const updatedUser = await user.save();

        res.status(200).json({ // 200 means ok
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        })
    }else{
        res.status(404); // 404 means not found
        throw new Error('User not found');
    }

    res.json({ message: 'Update user profile' });
});



export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};