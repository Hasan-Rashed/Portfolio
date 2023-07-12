import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { useGetSingleProjectQuery } from '../slices/projectsApiSlice';

import Fade from 'react-reveal/Fade';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Button } from "@material-tailwind/react";



const SingleProject = () => {

    // getting project id from the url
    const { id: productId } = useParams();
    
    // initialize dispatch and navigate hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting user info from the auth state in local storage
    const { userInfo } = useSelector((state) => state.auth);

    // projects info from redux store
    const { data: project, isLoading, refetch, error } = useGetSingleProjectQuery(productId); // passing the product id to the query, to get single project details


    
  return (
    <div>
        <div className="container grid items-center justify-center grid-cols-1 gap-4 px-5 py-10 mx-auto text-center text-gray-800 select-none md:grid-cols-2">

            { isLoading && <WaveLoading color='#0080FF' size='large' /> }

            <Fade bottom>
                <div className="md:col-span-2">
                    <h1 className="pt-5 pb-10 text-2xl font-bold">Project Details</h1>
                </div>
            </Fade>

            <Fade left>
                <div className='py-5'>
                    <img src={`${project?.image}`} alt={`${project?.name} image`} className="object-cover w-full rounded-lg shadow-lg" />
                </div>
            </Fade>

             <Fade right>
                <div className="grid grid-cols-2 py-5">
                    <div className='col-span-2 py-3'>
                        <h1 className="text-xl font-semibold">{project?.name}</h1>
                        <p className='opacity-70'>{project?.description}</p>
                    </div>

                        <div className='py-5'>
                            <strong>Client Name</strong>
                            <p>{project?.clientName}</p>
                        </div>
                        <div className='py-5'>
                            <strong>Category</strong>
                            <p>{project?.category}</p>
                        </div>

                        <div className='py-5'>
                            <strong>Technology Used</strong>
                            {
                                project?.technology.map((tech, index) => (
                                    <p key={index}>{tech}</p>
                                ))
                            }
                        </div>
                        <div className='py-5'>
                            <strong>Date</strong>
                            <p>{project?.createdAt}</p>
                        </div>

                        <div className=''>
                            <p className='font-bold'>share</p>
                            <Link to='https://facebook.com/hasanrashed30' className='px-1' ><FacebookIcon /></Link>
                            <Link to='https://www.linkedin.com/in/hasanrashed30/' className='px-1' ><LinkedInIcon /></Link>
                        </div>

                        <div className='flex flex-col'>
                            <Link to={project?.liveLink} className='px-5 py-3 my-2 text-white bg-blue-600 hover:bg-blue-800' ><LinkIcon /> Live Link</Link>
                            <Link to={project?.githubLink} className='px-3 py-3 my-2 text-white bg-gray-600 hover:bg-gray-800' ><GitHubIcon /> Source Code</Link>
                        </div>
                </div>
            </Fade>
            

        </div>
    </div>
  )
}

export default SingleProject