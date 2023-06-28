import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className=" bg-gray-800 py-5 px-3">
        <footer className="container mx-auto text-center items-center flex-col md:flex-row justify-around">
            <div>
                <p className="text-white py-4">&copy; 2023 All Rights Reserved. Created by Hasan Rashed.</p>
            </div>

            <div className="flex justify-center">
                <Link to='https://github.com/Hasan-Rashed' className="p-4">
                    <GitHubIcon className="text-white animate-pulse hover:animate-bounce "/>
                </Link>

                <Link to='https://facebook.com/hasanrashed30' className="p-4">
                    <FacebookIcon className="text-white animate-pulse hover:animate-bounce "/>
                </Link>

                <Link to='https://www.linkedin.com/in/hasanrashed30/' className="p-4">
                    <LinkedInIcon className="text-white animate-pulse hover:animate-bounce "/>
                </Link>
            </div>
        </footer>
    </div>
  )
}

export default Footer