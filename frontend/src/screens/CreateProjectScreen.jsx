import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import CreateProject from "../components/CreateProject"


const CreateProjectScreen = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <CreateProject />
        <Footer />
    </div>
  )
}

export default CreateProjectScreen;