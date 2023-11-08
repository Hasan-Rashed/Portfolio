import { Typewriter } from 'react-simple-typewriter'
import developer from '../assets/Rashed.jpg'


const Hero = () => {
  return (
    <div className='select-none bg-slate-200' >
        <div className="container items-center justify-center px-3 py-10 mx-auto text-center sm:h-80vh md:h-60vh lg:h-40vh xl:h-20vh">
                <h1 className="py-5 text-2xl font-bold text-gray-800 uppercase md:text-4xl">I'm <span className='text-blue-500'>Kamrul Hasan Rashed</span></h1>
        
                <h2 className='py-3 text-xl font-bold md:text-3xl'>
                    <span className='text-gray-800'>A
                    <strong className='text-blue-500'>
                        <Typewriter
                        // words={[' Fullstack Web Application', ' Frontend Web', ' Backend Web']}
                        words={[' Frontend Focused Fullstack Web']}
                        loop={1000}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                        </strong>
                        Developer
                    </span>
                </h2>


                <div className="grid items-center justify-center grid-cols-1 px-3 py-5 md:grid-cols-2">
                    <div>
                        <p className='leading-7 text-gray-800 transition duration-75 ease-linear transform opacity-50 text-md md:text-xl hover:opacity-100 hover:scale-105'>
                        &#8221;I am committed to perform my work with full of attention and honesty. I always think of myself as a student and want to adopt and spread more and more knowledge so that it can be helpful for mankind.&#8221;
                        </p>
                    </div>
                    <div className='hidden md:inline-block'>
                        <img src={developer} className='w-auto rounded-md' alt="developer" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero