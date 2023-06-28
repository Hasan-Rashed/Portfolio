import ForumIcon from '@mui/icons-material/Forum';
import { ImDatabase } from "react-icons/im";
import { GoBrowser } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import Fade from 'react-reveal/Fade';


const Services = () => {
  return (
    <div>
        <div className="container mx-auto items-center justify-center py-10 px-3 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className='py-3 text-gray-800 md:col-span-3'>
                <h1 className='text-2xl md:text-3xl font-bold text-center'>Core Services</h1>
                <p className='text-lg md:text-md text-center py-2 opacity-80'>I can cooperate with the following services.</p>
            </div>

            <Fade bottom>
                <div className='text-gray-800'>   
                    <ForumIcon className='animate-bounce'/>
                    <h2 className='px-2 py-3 inline text-lg md:text-md font-semibold text-start uppercase'>Software Requirement Analysis</h2>
                    <p className='opacity-80 py-3 text-justify' >It is the first step to develop a software. Without software requirement analysis we can not think a good software. There will be always leakage of clients requirement without it. So I am trying to bring out the all features what clients want by hearing their story. In this phase I use Use case diagram or UML diagram to visualize the clients requirement.</p>
                </div>
            </Fade>

            <Fade bottom>
                <div className='text-gray-800'>   
                    <ImDatabase className='inline text-xl animate-bounce'/>
                    <h2 className='px-2 py-3 inline text-lg md:text-md font-semibold text-start uppercase'>Database Design</h2>
                    <p className='opacity-80 py-3 text-justify' >One of the major step for a rich software development. After proper requirement analysis, I try to design the database. Without proper database design software can not fulfill clients requirement. In this case I try to use Entity Relationship or ER diagram to design the database then after again proper analysis develop it.</p>
                </div>
            </Fade>

            <Fade bottom>
                <div className='text-gray-800'>   
                    <GoBrowser className='inline text-xl animate-bounce'/>
                    <h2 className='px-2 py-3 inline text-lg md:text-md font-semibold text-start uppercase'>Frontend Development</h2>
                    <p className='opacity-80 py-3 text-justify' >In front-end development, if client has any template design then I try to develop it with pixel perfection. As I am not expert in UI/UX design I can not give the support of template design and software prototyping at this moment. But there are so many UI/UX designer who can give this support. Pixel perfect and responsive design is must for good looking application. And user friendly front-end is the key to your success.</p>
                </div>
            </Fade>

            <Fade bottom>
                <div className='text-gray-800'>   
                    <FiSettings className='inline text-xl animate-bounce'/>
                    <h2 className='px-2 py-3 inline text-lg md:text-md font-semibold text-start uppercase'>Backend Development</h2>
                    <p className='opacity-80 py-3 text-justify' >A back-end is the heart of a software. Security, authentication and authorization is depended on the back-end of a software. I follow the Model View Controller-MVC architecture to develop a software which makes the web application most reliable.</p>
                </div>
            </Fade>
        </div>
    </div>
  )
}

export default Services