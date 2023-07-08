import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import Projects from "../components/Projects"


const ProjectsScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <PageProgress color={'skyblue'} height={3} />
        <Header />
        <Projects />
        <Footer />
    </div>
  )
}

export default ProjectsScreen