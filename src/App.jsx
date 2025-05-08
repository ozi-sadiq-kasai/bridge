import Nav from './components/Nav/Nav'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import FAQ from './pages/faq/FAQ';
import DetailProcess from './pages/detail_process/DetailProcess';
import Detailed__Expertise from './components/expertise/Detailed__Expertise';
import Form from './pages/form/Form';
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/process' element={<DetailProcess />} />
        <Route path='/deets' element={<Detailed__Expertise />} />
        <Route path='/get-started' element={<Form />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
