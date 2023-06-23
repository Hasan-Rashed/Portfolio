import mongoose from "mongoose";


const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    technology: {
        type: Array,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    githubLink:{
        type: String,
        required: true
    },
    image: {
        type: String
    }
},
{
    timestamps: true // to get created at and updated at by default
});


const Project = mongoose.model('Project', projectSchema);

export default Project;