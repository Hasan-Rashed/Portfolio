import PageProgress from 'react-page-progress';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from '../components/Contact';

const ContactScreen = () => {
  return (
    <>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <Contact />
        <Footer />
    </>
  )
}

export default ContactScreen