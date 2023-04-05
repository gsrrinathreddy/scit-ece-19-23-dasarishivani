import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './pages/Aboutus';
import Certifications from './pages/Certifications';
import Contactme from './pages/Contactme';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/>
       <Routes>
       <Route path="Aboutus" element={<Aboutus/>}/>
       <Route path="Certifications" element={<Certifications/>}/>
       <Route path="Contactme" element={<Contactme/>}/>
       <Route path="Experience" element={<Experience/>}/>
       <Route path="Hobbies" element={<Hobbies/>}/>
       <Route path="Projects" element={<Projects/>}/>
       <Route path="Skills" element={<Skills/>}/>
       
       
       <Navbar/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;