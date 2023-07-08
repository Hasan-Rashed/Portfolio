import Header from "../components/Header"
import Footer from "../components/Footer"
import PageProgress from 'react-page-progress'
import Table from "../components/Table";


const CRUDTableScreen = () => {
  return (
    <div className="flex flex-col h-screen">
        <PageProgress color={'skyblue'} height={3} />
        <Header />
        <Table />
        <Footer />

    </div>
  )
}

export default CRUDTableScreen