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
import PageNotFoundScreen from './screens/PageNotFoundScreen'
import { useEffect } from 'react'
import ScrollToTop from 'react-scroll-up'
import up from './assets/up.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import CreateProjectScreen from './screens/CreateProjectScreen'
import CRUDTableScreen from './screens/CRUDTableScreen'
import SingleProjectScreen from './screens/SingleProjectScreen'
import UpdateProjectScreen from './screens/UpdateProjectScreen'


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
      <ToastContainer />


      <Router>
        <Routes>
          <Route index={true} path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectsScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/projects/:id" element={<SingleProjectScreen />} />
          <Route path='*' element={<PageNotFoundScreen />} />

          {/* Private Routes */}
          <Route path='' element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfileScreen />} /> {/* this is a private route */}
            <Route path="/createProject" element={<CreateProjectScreen />} /> {/* this is a private route */}
            <Route path="/tablelist" element={<CRUDTableScreen />} /> {/* this is a private route */}
            <Route path="/admin/project/update/:id" element={<UpdateProjectScreen />} /> {/* this is a private route */}
          </Route>
        </Routes>
      </Router>



      {/* scroll to top component */}
      <ScrollToTop showUnder={160}>
                <div className='w-8 shadow-xl'>
                    <img src={up} alt="scroll to top" />
                </div>
      </ScrollToTop>
    </>
  )
}

export default App
