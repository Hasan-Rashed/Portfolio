import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import responsive from '../assets/service icons/responsive.svg';
import ecommerce from '../assets/service icons/ecommerce.svg';
import html5 from '../assets/service icons/html5.svg';
import Jello from 'react-reveal/Jello';


const ServiceOffered = () => {
    
    const cardMaterial = [
        {img: responsive, h3: 'Web Development', p: 'Front End Development is building the visual components of a website. Using React, Tailwind CSS and other css library, I build fast and interactive websites. Using NodeJS, ExpressJS and MongoDB I build rest API.'},
        {img: ecommerce, h3: 'E-Commerce Website', p: 'I can build multi/single vendor E-Commerce website with mobile friendly and highly functionalities.'},
        {img: html5, h3: 'XD/FIGMA/SKETCH TO HTML', p: 'Adobe XD/Sketch file convert to HTML/REACT to make perfect web pages/application.'}
    ]
    
  return (
    <div className='bg-gray-200'>
        <div className="container py-10 px-5 mx-auto items-center text-center text-gray-800 justify-center grid grid-cols-1 md:grid-cols-3 gap-5 select-none">
            <div className='md:col-span-3 py-5'>
                <h3 className="text-lg md:text-xl font-semibold">Service Offers</h3>
                <p className="leading-3 opacity-70">What services you will get from me!</p>
            </div>


            {
                cardMaterial.map((item, index) => (

                    <div key={index}>
                    <Jello>
                    <Card className='shadow-lg bg-white hover:shadow-xl transition duration-300 px-2 h-96'>
                        <CardContent>
                            <img src={item.img} className='w-24 mx-auto py-3' alt="card img" />
                            <h3 className='text-md py-2 font-bold text-gray-800'>{item.h3}</h3>
                            <p className='text-gray-800 py-2 opacity-95'>{item.p}</p>
                        </CardContent>
                    </Card>
                    </Jello>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default ServiceOffered