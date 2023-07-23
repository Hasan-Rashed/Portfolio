import PropTypes from 'prop-types'; // ES6
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const ProjectTab = ({ project }) => {
  return (
    <div>
        {/* here is can access project.name project.description, project.createdAt, project._id, project.updatedAt */}
        
        <div>
            <Card className="mt-6 shadow-lg card">
                <CardHeader color="blue-gray" className="relative image-container">
                    <img src={project.image} alt={`${project.name} image`} className='image' layout="fill" />
                </CardHeader>
                <CardBody>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        {project.name}
                    </Typography>

                    <Typography>
                        {
                            project.technology.map((tech) => (
                                <span key={tech} className="inline-flex items-center justify-center px-3 py-1 rounded-lg text-blue-gray-500 bg-blue-gray-50">
                                    {tech}
                                </span>
                            ))
                        }
                    </Typography>
                </CardBody>
                
                <CardFooter className="flex justify-around pt-0">
                    <Button><Link to={project.liveLink} >Visit Project</Link></Button>
                    <Button><Link to={`${project._id}`} >Details</Link></Button>
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