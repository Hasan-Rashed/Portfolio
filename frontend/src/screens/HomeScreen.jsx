import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PageProgress from 'react-page-progress'


const HomeScreen = () => {
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