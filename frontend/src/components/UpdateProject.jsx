import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSingleProjectQuery, useUpdateProjectMutation } from '../slices/projectsApiSlice';
import { useNavigate, useParams } from "react-router-dom";

import { WaveLoading } from "react-loadingg";

import { toast } from "react-toastify";



const UpdateProject = () => {
    
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [clientName, setClientName] = useState("");
    const [technology, setTechnology] = useState("");
    const [liveLink, setLiveLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [image, setImage] = useState("");


    const { id: projectId } = useParams(); // getting the project id from the url

    const navigate = useNavigate();
    const dispatch = useDispatch();


    // getting user info from the auth state in local storage
    const { userInfo } = useSelector((state) => state.auth);

    // projects info from redux store
    const { data: project, isLoading, refetch, error } = useGetSingleProjectQuery(projectId); // passing the product id to the query, to get single project details


    const [updateProject, { isLoading: loadingUpdate }] = useUpdateProjectMutation();


    useEffect(() => {
        setName(project?.name);  // what ? means here is that if project is null or undefined then it will not throw an error
        setCategory(project?.category);
        setDescription(project?.description);
        setClientName(project?.clientName);
        setTechnology(project?.technology);
        setLiveLink(project?.liveLink);
        setGithubLink(project?.githubLink);
        setImage(project?.image);

    }, [project?.name, project?.category, project?.description, project?.clientName, project?.technology, project?.liveLink, project?.githubLink, project?.image]); 
        
    
    // form submit handler
    const submitHandler = async (e) => {
        e.preventDefault();

            try {
                await updateProject({
                    projectId,
                    name,
                    category,
                    description,
                    clientName,
                    technology,
                    liveLink,
                    githubLink,
                    image
                }).unwrap(); // unwrap() is used to get the actual payload object from the returned object

                toast.success("Project updated successfully");

                navigate('/projectlist');

            } catch (err) {
                toast.error(err?.data?.message || err?.error);
            }
    };

    // button click handler
    const handleButtonClick = () => {
        // setEmail('');
        // setPassword('');
    };

    
  return (
    <div>
         <div className="container px-5 py-10 mx-auto border rounded-md shadow-2xl select-none w-96">

            {/* loading component */}
            { isLoading && <WaveLoading color='#0080FF' size='large' />}

            <h3 className="mb-4 text-xl font-medium text-center">
                Update Project
            </h3>


            <form onSubmit={submitHandler} className="space-y-6" action="#">
                <div>
                {/* loading component */}
                { loadingUpdate && <WaveLoading color='#0080FF' size='large' />}
                    <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                    >
                    Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                
                <div>
                    <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium"
                    >
                    Category
                    </label>
                    <input
                    type="text"
                    name="category"
                    id="category"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium"
                    >
                    Description
                    </label>
                    <input
                    type="text"
                    name="description"
                    id="description"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="clientName"
                    className="block mb-2 text-sm font-medium"
                    >
                    Client Name
                    </label>
                    <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="technology"
                    className="block mb-2 text-sm font-medium"
                    >
                    Technology
                    </label>
                    <input
                    type="text"
                    name="technology"
                    id="technology"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter technology"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="liveLink"
                    className="block mb-2 text-sm font-medium"
                    >
                    Live Link
                    </label>
                    <input
                    type="text"
                    name="liveLink"
                    id="liveLink"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter liveLink"
                    value={liveLink}
                    onChange={(e) => setLiveLink(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="githubLink"
                    className="block mb-2 text-sm font-medium"
                    >
                    GitHub Link
                    </label>
                    <input
                    type="text"
                    name="githubLink"
                    id="githubLink"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter githubLink"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    required
                    />
                </div>

                <div>
                    <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium"
                    >
                    Image
                    </label>
                    <input
                    type="text"
                    name="image"
                    id="image"
                    className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter image link"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                    />
                </div>


                <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleButtonClick}
                >
                    Update
                </button>
            </form>
            </div>
    </div>
  )
}

export default UpdateProject