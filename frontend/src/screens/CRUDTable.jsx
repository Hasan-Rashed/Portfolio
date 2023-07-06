import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import Table from "../components/Table";


const CRUDTable = () => {
  return (
    <div>
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <Table />
        <Footer />

    </div>
  )
}

export default CRUDTable