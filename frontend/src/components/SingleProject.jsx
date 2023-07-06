import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { useGetSingleProjectQuery } from '../slices/projectsApiSlice';

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
        <div className="container py-10 px-5 mx-auto items-center justify-center gap-4 text-center select-none text-gray-800 grid grid-cols-1 md:grid-cols-2">

            { isLoading && <WaveLoading color='#0080FF' size='large' /> }

            <div className="md:col-span-2">
                <h1 className="text-2xl font-bold pt-5 pb-10">Project Details</h1>
            </div>

            <div className='py-5'>
                <img src={`${project?.image}`} alt={`${project?.name} image`} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>

            <div className="py-5 grid grid-cols-2">
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
                        <Link to={`&{project?.liveLink}`} className='py-3 my-2 px-5 bg-blue-600 hover:bg-blue-800 text-white' ><LinkIcon /> Live Link</Link>
                        <Link to={`&{project?.githubLink}`} className='py-3 my-2 px-3 bg-gray-600 hover:bg-gray-800 text-white' ><GitHubIcon /> Source Code</Link>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default SingleProject