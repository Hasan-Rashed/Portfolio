import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import PageNotFound from "../components/PageNotFound"


const AboutScreen = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <PageNotFound />
        <Footer />
    </div>
  )
}

export default AboutScreen