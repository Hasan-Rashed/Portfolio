import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import UpdateProfile from "../components/UpdateProfile";

const ProfileScreen = () => {
  return (
    <>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <UpdateProfile />
        <Footer />
    </>
  )
}

export default ProfileScreen