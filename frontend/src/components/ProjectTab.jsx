import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const ProjectTab = ({ project }) => {
  return (
    <div>
        {/* here is can access project.name project.description, project.createdAt, project._id, project.updatedAt */}
        
        <div>
            <Card className="mt-6 shadow-lg">
                <CardHeader color="blue-gray" className="relative">
                    <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        {project.name}
                    </Typography>

                    <Typography>
                        {
                            project.technology.map((tech) => (
                                <span key={tech} className="text-blue-gray-500 inline-flex items-center justify-center py-2 px-3 rounded-lg bg-blue-gray-50">
                                    {tech}
                                </span>
                            ))
                        }
                    </Typography>
                </CardBody>
                
                <CardFooter className="pt-0 flex justify-around">
                    <Button><Link to={project.liveLink} >Visit Project</Link></Button>
                    <Button><Link to="/projects/:id" >Details</Link></Button>
                </CardFooter>
            </Card>
        </div>
    </div>
  )
}

// validate props
ProjectTab.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectTab