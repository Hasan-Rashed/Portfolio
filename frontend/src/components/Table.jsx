import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { WaveLoading } from 'react-loadingg';
import { toast } from 'react-toastify';
import { useDeleteProjectMutation, useGetProjectsQuery } from '../slices/projectsApiSlice';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Card, Typography } from "@material-tailwind/react";
 


export default function Table() {

    
    // initialize dispatch and navigate hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // getting user info from the auth state in local storage
    const { userInfo } = useSelector((state) => state.auth);

    // deleteProduct action from project api slice
    const [deleteProject, { isLoading: loadingDelete}] = useDeleteProjectMutation(); // passing the project id to the deleteProject action in project api slice

    // projects info from redux store
    const { data: projects, isLoading, refetch, error } = useGetProjectsQuery();


const TABLE_HEAD = ["Name", "ID", "User", "CreatedAt", "UpdatedAt", "Edit", "Delete"];

// delete project handler
const deleteHandler = async (projectId) => {
    try{
        await deleteProject(projectId);

        toast.success("Project deleted successfully");
        
    }catch(err){
        toast.error(err?.data?.message || err.error);
    }
}
 

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
        
    <div className="container items-center justify-center py-5 mx-auto text-center mb-auto select-none">

        <Card className="w-full h-full overflow-scroll">
        <table className="w-full text-left table-auto min-w-max">
            <thead>
                <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                            >
                            {head}
                            </Typography>
                        </th>
                    ))}
                </tr>
            </thead>
            
            <tbody>
                {projects?.map((project, index) => {
                    const isLast = index === projects.length - 1;
                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
        
                    return (
                    <tr key={project._id}>
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {project.name}
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {project._id}
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {project.user}
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {project.createdAt}
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {project.updatedAt}
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography as="a" variant="small" color="blue" className="font-medium cursor-pointer">
                                <EditIcon onClick={() => navigate(`/admin/project/update/${project._id}`)} />
                            </Typography>
                        </td>
                        
                        <td className={classes}>
                            <Typography as="a"  variant="small" color="blue" className="font-medium cursor-pointer text-primary">

                                {/* loader for delete */}
                                { loadingDelete && <WaveLoading color='#0080FF' size='small' /> }
                                <DeleteForeverIcon onClick={() => deleteHandler(project._id)} />
                            </Typography>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
        </Card>

        </div>
    </>
  );
}