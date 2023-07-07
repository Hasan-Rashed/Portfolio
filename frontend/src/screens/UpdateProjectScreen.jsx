import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import UpdateProject from "../components/UpdateProject"



const UpdateProjectScreen = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <UpdateProject />
        <Footer />
    </div>
  )
}

export default UpdateProjectScreen