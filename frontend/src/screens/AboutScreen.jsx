import AboutHero from "../components/AboutHero"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Qualifications from "../components/Qualifications"
import PageProgress from 'react-page-progress'
import Skills from "../components/Skills"
import ServiceOffered from "../components/ServiceOffered"


const AboutScreen = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <AboutHero />
        <Qualifications />
        <Skills />
        <ServiceOffered />
        <Footer />
    </div>
  )
}

export default AboutScreen