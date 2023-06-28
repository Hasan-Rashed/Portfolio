import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PageProgress from 'react-page-progress'


const HomeScreen = () => {
  // Disable right click on the page
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
}, [ ])

  return (
    <>
        <PageProgress color={'skyblue'} height={4} />
        <Header />
        <Hero />
        <Services />
        <Footer />
    </>
  )
}

export default HomeScreen