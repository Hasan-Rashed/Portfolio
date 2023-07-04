import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { toast } from 'react-toastify';
import { useGetProjectsQuery } from '../slices/projectsApiSlice';

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";

export default function Projects() {

    // initialize dispatch and navigate hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // user info from redux store
    const { userInfo } = useSelector((state) => state.auth);

    // projects info from redux store
    const { data: projects, isLoading, refetch, error } = useGetProjectsQuery();


    const data = [
        { label: "ALL", value: "all" },
        { label: "FRONT END", value: "Front End" },
        { label: "FULL STACK", value: "Full Stack" },
        { label: "WEB DESIGN", value: "Web Design" },
        { label: "MOBILE APP", value: "Mobile App" },
    ];
    
    return (
        <>
            {/* loading component */}
            { isLoading && <WaveLoading color='#0080FF' size='large' />}

            <div className='container mx-auto text-center items-center justify-center select-none'>
            <div>
                <Tabs id="custom-animation" value="all">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                        }}
                    >
                        {data.map(({ value }) => (
                        <TabPanel key={value} value={value}>
                            {value}

                            <div className='container mx-auto items-center justify-center grid grid-cols-1 md:grid-cols-3'>
                                {
                                    value === 'all' ? 
                                    projects?.map((project) => (
                                        <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
                                            <div className='text-xl font-bold'>{project.name}</div>
                                            <div className='text-md'>{project.description}</div>
                                            <div className='text-md'>{project.createdAt}</div>
                                            <div className='text-md'>{project.updatedAt}</div>
                                            <div className='text-md'>{project._id}</div>
                                        </div>
                                    ))

                                    :

                                    // filtering projects by frontend category
                                    value === 'Front End' ? 
                                    projects?.filter((project) => project.category === 'Front End').map((project) => (
                                        <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
                                            <div className='text-xl font-bold'>{project.name}</div>
                                            <div className='text-md'>{project.description}</div>
                                            <div className='text-md'>{project.createdAt}</div>
                                            <div className='text-md'>{project.updatedAt}</div>
                                            <div className='text-md'>{project._id}</div>
                                        </div>
                                    ))
                                    
                                    :

                                    // filtering projects by fullstack category
                                    value === 'Full Stack' ? 
                                    projects?.filter((project) => project.category === 'Full Stack').map((project) => (
                                        <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
                                            <div className='text-xl font-bold'>{project.name}</div>
                                            <div className='text-md'>{project.category}</div>
                                            <div className='text-md'>{project.description}</div>
                                            <div className='text-md'>{project.createdAt}</div>
                                            <div className='text-md'>{project.updatedAt}</div>
                                            <div className='text-md'>{project._id}</div>
                                        </div>
                                    ))
                                    
                                    :

                                    // filtering projects by web design category
                                    value === 'Web Design' ? 
                                    projects?.filter((project) => project.category === 'Web Design').map((project) => (
                                        <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
                                            <div className='text-xl font-bold'>{project.name}</div>
                                            <div className='text-md'>{project.category}</div>
                                            <div className='text-md'>{project.description}</div>
                                            <div className='text-md'>{project.createdAt}</div>
                                            <div className='text-md'>{project.updatedAt}</div>
                                            <div className='text-md'>{project._id}</div>
                                        </div>
                                    ))
                                    
                                    :

                                    // filtering projects by mobile app category
                                    value === 'Mobile App' ? 
                                    projects?.filter((project) => project.category === 'Mobile App').map((project) => (
                                        <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
                                            <div className='text-xl font-bold'>{project.name}</div>
                                            <div className='text-md'>{project.category}</div>
                                            <div className='text-md'>{project.description}</div>
                                            <div className='text-md'>{project.createdAt}</div>
                                            <div className='text-md'>{project.updatedAt}</div>
                                            <div className='text-md'>{project._id}</div>
                                        </div>
                                    ))
                                    
                                    : 
                                    
                                    // if no projects found
                                    null
                                }
                            </div>
                        </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>

        
                <div>
                    {
                        isLoading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>{error}</div>
                        ) : (
                            <div>
                                <h1>Projects</h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>DESCRIPTION</th>
                                            <th>CREATED AT</th>
                                            <th>UPDATED AT</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.map((project) => (
                                            <tr key={project._id}>
                                                <td>{project._id}</td>
                                                <td>{project.name}</td>
                                                <td>{project.description}</td>
                                                <td>{project.createdAt}</td>
                                                <td>{project.updatedAt}</td>
                                                <td>
                                                    <button onClick={() => navigate(`/project/${project._id}`)}>Details</button>
                                                    <button onClick={() => navigate(`/project/${project._id}/edit`)}>Edit</button>
                                                    {/* <button onClick={() => dispatch(deleteProject(project._id))}>Delete</button>     */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>
        </>
    ); 
}


// projects.filter((project) => project.category === 'front end').map((project) => (
//     <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
//         <div className='text-xl font-bold'>{project.name}</div>
//         <div className='text-md'>{project.description}</div>
//         <div className='text-md'>{project.createdAt}</div>
//         <div className='text-md'>{project.updatedAt}</div>
//         <div className='text-md'>{project._id}</div>
//     </div>
// ))