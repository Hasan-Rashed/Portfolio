import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateProjectMutation } from '../slices/projectsApiSlice';
import { useNavigate } from "react-router-dom";

import { WaveLoading } from "react-loadingg";
import { toast } from "react-toastify";

export default function CreateProject() {
const [name, setName] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
const [clientName, setClientName] = useState("");
const [technology, setTechnology] = useState("");
const [liveLink, setLiveLink] = useState("");
const [githubLink, setGithubLink] = useState("");
const [image, setImage] = useState("");


// initialize the navigate hook and dispatch
const navigate = useNavigate();
const dispatch = useDispatch();


// getting user info from the auth state in local storage
const { userInfo } = useSelector((state) => state.auth);

const [createProject, { isLoading }] = useCreateProjectMutation();


// form submit handler
const submitHandler = async (e) => {
    e.preventDefault();

    try {
        await createProject({ name, category, description, clientName, technology, liveLink, githubLink, image }).unwrap();
        // refetch();
        toast.success("Project created successfully");
        navigate("/projects");

    } catch (err) {
        toast.error(err?.data?.message || err?.error);
    }
    }

return (
    <div className="container px-5 py-10 mx-auto border rounded-md shadow-2xl select-none w-96">

        {/* loading component */}
        { isLoading && 
            <div className="flex items-center justify-center h-screen bg-opacity-50">
                {/* Loader element */}
                <div className="loader">
                    <WaveLoading color='#0080FF' size='large' />
                </div>
            </div>
        }

        <h3 className="mb-4 text-xl font-medium text-center">
            Create Project
        </h3>


        <form onSubmit={submitHandler} className="space-y-6" action="#">
            <div>
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
                id="category"
                className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="'Front End', 'Full Stack', 'Web Design', 'Mobile App'"
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
                htmlFor="technologyUsed"
                className="block mb-2 text-sm font-medium"
                >
                Technology Used
                </label>
                <input
                type="text"
                id="technologyUsed"
                className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter technology used"
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
                Github Link
                </label>
                <input
                type="text"
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
            >
                Create
            </button>
        </form>
    </div>
);
}