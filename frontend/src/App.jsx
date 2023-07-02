// import { Outlet } from "react-router-dom"
// import { Container } from "react-bootstrap"
// import Header from "./components/Header"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <>
//       <Header />
//       <ToastContainer />
//       <Container className="my-2" >
//         <Outlet />
//       </Container>
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import ProjectsScreen from './screens/ProjectsScreen'
import ContactScreen from './screens/ContactScreen'
import PageNotFound from './screens/PageNotFound'
import { useEffect } from 'react'


function App() {

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
      <Router>
        <Routes>
          <Route index={true} path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
