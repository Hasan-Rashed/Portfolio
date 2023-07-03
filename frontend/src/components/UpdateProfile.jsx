import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";

import { WaveLoading } from "react-loadingg";

import { toast } from "react-toastify";

export default function UpdateProfile() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const navigate = useNavigate();
const dispatch = useDispatch();


// get user info from redux store
const { userInfo } = useSelector((state) => state.auth);

const [updateProfile, { isLoading }] = useUpdateUserMutation();


useEffect(() => {
    setName(userInfo?.name); // what ? means here is that if userInfo is null or undefined then it will not throw an error
    setEmail(userInfo?.email); // what ? means here is that if userInfo is null or undefined then it will not throw an error
}, [userInfo?.name, userInfo?.email]); // dependency array



// form submit handler
const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    } else {
        try {
            const res = await updateProfile({
                _id: userInfo?._id,
                name,
                email,
                password
            }).unwrap(); // unwrap() is used to get the actual payload object from the returned object

            dispatch(setCredentials({ ...res })); // update the user info in redux store
            toast.success("Profile updated successfully");

        } catch (err) {
            toast.error(err?.data?.message || err?.error);
        }
    }
};

// button click handler
const handleButtonClick = () => {
    // setEmail('');
    // setPassword('');
};

return (
    <div className="container mx-auto py-10 w-96 px-5 border rounded-md shadow-2xl">
        <h3 className="mb-4 text-xl font-medium text-center">
        Update Profile
        </h3>

        
        {/* loading component */}
        { isLoading && <WaveLoading color='#0080FF' size='large' />}


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
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
                >
                Email
                </label>
                <input
                type="email"
                name="email"
                id="email"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            <div>
                <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium "
                >
                Password
                </label>
                <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className=" border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>

            <div>
                <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium"
                >
                Confirm Password
                </label>
                <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
);
}