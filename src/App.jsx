import React from 'react';
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Library from './pages/Library';
import Credit from './pages/Credit';
import General from './pages/General';
import Books from './pages/Books';
import Summarizes from './pages/Summarizes';
import PrevExams from './pages/PrevExams';
import ExamDetails from './pages/ExamDetails';
 
 const App = () => {
   return (
     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>
      <ToastContainer />
      <NavBar/>
      <SearchBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collections/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/credit' element={<Credit/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path="/books" element={<Books/>} />
          <Route path="/summarizes" element={<Summarizes/>} />
          <Route path="/prevexams" element={<PrevExams/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route path='/exam/cs101' element={<ExamDetails exam="CS101" />} />
          <Route path='/exam/cs201' element={<ExamDetails exam="CS201" />} />
          <Route path='/exam/cs301' element={<ExamDetails exam="CS301" />} />
          <Route path='/exam/cs401' element={<ExamDetails exam="CS401" />} />
          
       </Routes>
       <Footer/>
     </div>
   )
 }
 
 export default App
 