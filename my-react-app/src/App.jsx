import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Media from './Pages/Media';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog';
import Donations from './Pages/Donations';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Hero from './components/Hero';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <div className="container mt-4">
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
  )
}

export default App
