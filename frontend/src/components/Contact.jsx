import messenger from '../assets/social/messenger.svg';
import whatsapp from '../assets/social/whatsapp.svg';
import mailc from '../assets/social/mailc.svg';
import internet from '../assets/social/internet.svg';
import location from '../assets/social/location.svg';
import mail from '../assets/social/mail.svg';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import emailjs from '@emailjs/browser';

import { toast } from 'react-toastify';

// import { GoogleMap, LoadScript } from '@react-google-maps/api';


const Contact = () => {

    
// const MapContainer = () => {
//     const mapStyles = {
//       height: '400px',
//       width: '100%'
//     };
  
//     const defaultCenter = {
//       lat: 40.712776,
//       lng: -74.005974
//     };
// }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_37jcvbl', 'template_jpvzfru', e.target, 'I7ShoZpHdaJekw3nd')

        toast.success('Mail Sent');
    }

  return (
    <div>
        <div className="container mx-auto py-10 px-5 text-center text-gray-800 items-center justify-center grid grid-cols-1 md:grid-cols-4 select-none">
            <Fade bottom>
                <div className="text-gray-800 md:col-span-4">
                    <h3 className="text-xl font-semibold">Contact Me</h3>
                    <p className="opacity-70 leading-3 text-sm">GET IN TOUCH</p>
                    <p className='opacity-90 py-5'>Feel free to knock me without any hesitation. If you want to know anything you can mail me at hasanrashed537@gmail.com or just go below and type your name, email, message and then send it. You can also knock me on the social medias. Thank you!</p>
                </div>
            </Fade>

            <div className='mx-auto'>
                <Fade bottom>
                    <div className='py-2'>
                        <span className='flex items-center justify-start'><img src={internet} className='w-6 inline-block items-start justify-start' alt="internet" />Quick Contact</span>
                        <div className="flex items-center justify-start gap-5 ps-10 py-2">
                            <a target='_blank' rel='noreferrer' href="https://m.me/hasanrashed30"><img className='w-6' src={messenger} alt="messenger icon" /></a>
                            <a target='_blank' rel='noreferrer' href="https://wa.me/+8801884135530"><img className='w-6' src={whatsapp} alt="whatsapp icon" /></a>
                            <a target='_blank' rel='noreferrer' href="https://mail.google.com/mail/u/0/?fs=1&to=hasanrashed537@gmail.com"><img className='w-8' src={mailc} alt="mail" /></a>
                        </div>
                    </div>

                    <div className='py-2'>
                        <span className='flex items-center justify-start'><img src={location} className='w-6 inline-block items-start justify-start' alt="internet" />Chittagong, Bangladesh</span>
                        <p className='text-start py-1 ps-10'>Bijoypur, Cumilla</p>
                    </div>

                    <div className='py-2'>
                        <span className='flex items-center justify-start'><img src={mail} className='w-6 inline-block items-start justify-start' alt="internet" />Email</span>
                        <p className='text-start py-1 ps-10'>hasanrashed537@gmail.com</p>
                    </div>

                    <div className="flex py-2 justify-around w-48 items-center text-center">
                        <Link to='https://github.com/Hasan-Rashed'>
                            <GitHubIcon className="text-blue-800"/>
                        </Link>

                        <Link to='https://facebook.com/hasanrashed30'>
                            <FacebookIcon className="text-blue-800"/>
                        </Link>

                        <Link to='https://www.linkedin.com/in/hasanrashed30/'>
                            <LinkedInIcon className="text-blue-800"/>
                        </Link>
                    </div>
                </Fade>
            </div>

            <div className='md:col-span-3 py-10 md:py-3'>
                <section className="bg-white dark:bg-gray-900">
                    <Fade bottom>
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2> */}
                            <h3 className="mb-4 md:mb-8 text-center text-gray-800 dark:text-gray-400 text-xl font-bold">Send me a message</h3>
                            <form className="space-y-8" onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                    <input type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="email_from" id="emailForm" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Your Email" required />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Subject" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea id="message" name="message" rows="6" className="block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Message..."></textarea>
                                </div>
                                <Button type='submit' variant="contained" endIcon={<SendIcon />}>
                                    Send message
                                </Button>
                            </form>
                        </div>
                    </Fade>
                </section>
            </div>

            {/* <div className="py-10 px-5 md:col-span-3 w-24 mx-auto items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.138885402896!2d91.15673757424618!3d23.38319240277661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37547e26ad36aa03%3A0xd33017d4bfd10472!2z4Kas4Ka_4Kac4Kef4Kaq4KeB4KawIOCmrOCmvuCmnOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1688285167221!5m2!1sen!2sbd" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
        </div>


        {/* <LoadScript googleMapsApiKey="AIzaSyCfcdhSWtFaxWSFVf8YcZyJWAbXzTr1fq4">
        <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
        />
        </LoadScript> */}
    </div>
  )
}

export default Contact
