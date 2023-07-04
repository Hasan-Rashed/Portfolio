import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCreateProjectMutation } from '../slices/projectsApiSlice';
import { useNavigate } from "react-router-dom";

import { Select, Option } from "@material-tailwind/react";
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
const [imageLink, setImageLink] = useState("");
const [image, setImage] = useState("");


// initialize the navigate hook and dispatch
const navigate = useNavigate();
const dispatch = useDispatch();


// get user info from redux store
const { userInfo } = useSelector((state) => state.auth);

const [createProject, { isLoading }] = useCreateProjectMutation();


// form submit handler
const submitHandler = async (e) => {
    e.preventDefault();

    try {
        await createProject({ name, category, description, clientName, technology, liveLink, githubLink, imageLink, image }).unwrap();
        // refetch();
        toast.success("Project created successfully");
        navigate("/projects");

    } catch (err) {
        toast.error(err?.data?.message || err?.error);
    }
    }

return (
    <div className="container mx-auto py-10 w-96 px-5 border rounded-md shadow-2xl select-none">

        {/* loading component */}
        { isLoading && <WaveLoading color='#0080FF' size='large' />}


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
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                required
                />
                </div>

                <div>
                    <label htmlFor="file-input" className="sr-only">Choose file</label>
                    <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
                        file:bg-transparent file:border-0
                        file:bg-gray-100 file:mr-4
                        file:py-3 file:px-4
                        dark:file:bg-gray-700 dark:file:text-gray-400"
                        value={image}
                        onChange={(e) => setImage(e.target.files[0])}
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