import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Fetchitems from "../components/fetchitems";
import { useSelector } from "react-redux";
import Loading from "../components/loading";

function App() {

  const fetchstatus = useSelector(store => store.fetchStatus)

  return (
    <>
      <Header />
      <Fetchitems />
      {fetchstatus.cureentlyFetching ? (<Loading />) : (<Outlet />)}
      <Footer />
    </>
  )
}

export default App
