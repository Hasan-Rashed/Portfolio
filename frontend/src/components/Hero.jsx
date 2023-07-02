import { Typewriter } from 'react-simple-typewriter'
import developer from '../assets/developer activity.svg'


const Hero = () => {
  return (
    <div className=' bg-slate-200 select-none' >
        <div className="container px-3 mx-auto py-10 text-center items-center justify-center sm:h-80vh md:h-60vh lg:h-40vh xl:h-20vh">
                <h1 className="text-2xl md:text-4xl font-bold py-5 text-gray-800 uppercase">I'm <span className='text-blue-500'>Kamrul Hasan Rashed</span></h1>
        
                <h2 className='text-xl md:text-3xl py-3 font-bold'>
                    <span className='text-gray-800'>A
                    <strong className='text-blue-500'>
                        <Typewriter
                        words={[' Fullstack Web Application', ' Frontend Web', ' Backend Web']}
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


                <div className="grid grid-cols-1 md:grid-cols-2 py-5 px-3 justify-center items-center">
                    <div>
                        <p className='leading-7 text-md md:text-xl opacity-50 hover:opacity-100 duration-75 transform hover:scale-105 transition ease-linear text-gray-800'>
                        &#8221;I am committed to perform my work with full of attention and honesty. I always think of myself as a student and want to adopt and spread more and more knowledge so that it can be helpful for mankind.&#8221;
                        </p>
                    </div>
                    <div className='hidden md:inline-block'>
                        <img src={developer} className='w-96' alt="developer" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Hero