import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { toast } from 'react-toastify';
import { useGetProjectsQuery } from '../slices/projectsApiSlice';

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, } from "@material-tailwind/react";
import ProjectTab from './ProjectTab';

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
            { isLoading && 
                <div className="flex items-center justify-center h-screen bg-opacity-50">
                    {/* Loader element */}
                    <div className="loader">
                        <WaveLoading color='#0080FF' size='large' />
                    </div>
                </div>
            }

            <div className='container mx-auto py-5 md:py-10 px-5 text-center items-center justify-center select-none gap-5'>
                <div className='text-gray-800 pt-2 pb-5'>
                    <h3 className='font-semibold text-xl'>My Projects</h3>
                    <p className='leading-3 opacity-80'>Recent Works</p>
                    <p className='opacity-80 text-gray-800 py-5 text-justify md:text-center'>I built various typeof projects with Javascript, React, Redux, NodeJS, ExpressJS, MongoDB, MySQL, Firebase, Bootstrap, TailwindCSS, Material UI and so on.</p>
                </div>

                <div>
                    <Tabs id="custom-animation" value="all">
                        <TabsHeader className='shadow-lg'>
                            {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className='text-sm md:text-md'>
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
                                
                                {/* projects grid */}
                                <div className='container mx-auto py-10 items-center justify-center gap-3 grid grid-cols-1 md:grid-cols-3'>
                                    {
                                        // rendering all projects here
                                        value === 'all' ? 
                                        projects?.map((project) => (
                                            <ProjectTab key={project._id} project={project} />
                                        ))

                                        :

                                        // filtering projects by frontend category
                                        value === 'Front End' ? 
                                        projects?.filter((project) => project.category === 'Front End').map((project) => (
                                            <ProjectTab key={project._id} project={project} />
                                        ))
                                        
                                        :

                                        // filtering projects by fullstack category
                                        value === 'Full Stack' ? 
                                        projects?.filter((project) => project.category === 'Full Stack').map((project) => (
                                            <ProjectTab key={project._id} project={project} />
                                        ))
                                        
                                        :

                                        // filtering projects by web design category
                                        value === 'Web Design' ? 
                                        projects?.filter((project) => project.category === 'Web Design').map((project) => (
                                            <ProjectTab key={project._id} project={project} />
                                        ))
                                        
                                        :

                                        // filtering projects by mobile app category
                                        value === 'Mobile App' ? 
                                        projects?.filter((project) => project.category === 'Mobile App').map((project) => (
                                            <ProjectTab key={project._id} project={project} />
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

        </>
    ); 
}


{/* <div key={project._id} className='bg-gray-100 rounded-xl p-4 m-2'>
    <div className='text-xl font-bold'>{project.name}</div>
    <div className='text-md'>{project.description}</div>
    <div className='text-md'>{project.createdAt}</div>
    <div className='text-md'>{project.updatedAt}</div>
    <div className='text-md'>{project._id}</div>
</div> */}