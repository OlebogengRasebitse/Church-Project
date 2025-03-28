import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Media/Home';
import Media from './Pages/Media';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Donations from './Pages/Donations/Donations';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Hero from './components/Hero';
import CustomFooter from './components/Footer/CustomFooter';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
        <Helmet>
          <title>Church Great Commission</title>
          <meta name="description" content="Welcome to our church. We are a community of believers." />
          <meta name="keywords" content="Church, Community, Faith" />
          <link rel="icon" href="/src/images/White Logo.png" />
        </Helmet>
  <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/media' element={<Media />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Donations' element={<Donations />} />
      </Routes>
      <CustomFooter />
      </div>
    </div>
  );
}

export default App
