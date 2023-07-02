import me from '../assets/mer.png';
import LightSpeed from 'react-reveal/LightSpeed';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const AboutHero = () => {
  return (
    <div className='bg-gray-200 select-none'>
        <div className="container mx-auto px-5 items-center justify-center py-10 text-start grid grid-cols-1 md:grid-cols-2 gap-5">
          <LightSpeed left>
              <div>
                <strong className='py-1 text-gray-800'>Hi, I am Rashed.</strong>
                <p className='py-3 text-gray-800'>A Passionate Web developer and dedicated to my work. I am curious about the new technologies and like to learn from the core. I love to develop web applications with modern technologies like Javascript, ReactJS, NodeJs and so on.</p>
                <span className='text-gray-800 py-3'>My big power is I'm a hard-worker, self-motivated and quick learner, I always think positive manner and I learn from my mistakes. And I always ready to learn and adapt to new things.</span>

                {/* <div className='py-2'>
                  <strong className='block'>- Web Development</strong>
                  <strong className='block'>- Database Design</strong>
                  <strong className='block'>- Database Administration</strong>
                  <strong className='block'>- Adobe Photoshop</strong>
                </div> */}

                <div className='py-5 mx-auto'>
                  <Button variant="contained" startIcon={<CloudDownloadIcon />}>
                    <Link to='/cv' >Download CV</Link>
                  </Button>
                </div>

                  {/* all links */}
                  <div className="flex justify-center  text-black">
                  <Link to='https://github.com/Hasan-Rashed' className="p-4">
                      <GitHubIcon className="animate-pulse hover:animate-bounce"/>
                  </Link>

                  <Link to='https://facebook.com/hasanrashed30' className="p-4">
                      <FacebookIcon className="animate-pulse hover:animate-bounce "/>
                  </Link>

                  <Link to='https://www.linkedin.com/in/hasanrashed30/' className="p-4">
                      <LinkedInIcon className="animate-pulse hover:animate-bounce "/>
                  </Link>
                </div>
              </div>
          </LightSpeed>

          <LightSpeed right>
            <div className='order-first md:order-last'>
                <img src={me} className='rounded-full md:rounded' alt="Rashed photo" />
            </div>
          </LightSpeed>
        </div>
    </div>
  )
}

export default AboutHero