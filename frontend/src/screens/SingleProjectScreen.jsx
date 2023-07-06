import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import SingleProject from "../components/SingleProject"



const SingleProjectScreen = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <SingleProject />
        <Footer />
    </div>
  )
}

export default SingleProjectScreen