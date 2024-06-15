import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Donations from './Pages/Donations';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Hero from './components/Hero';

function App() {

  return (
      <div className="container mt-4">
           <CustomNavbar />
           <Hero />
        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/Donations' element={<Donations/>} />
       </Routes>

      </div>
  )
}

export default App
