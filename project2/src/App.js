
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Qualification from './pages/Qualification';


function App() {
  return(
    <div ClassName="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path ="/Aboutus" element={<Aboutus/>}/>
      <Route path ="/Hobbies" element={<Hobbies/>}/>
      <Route path ="/Skills" element={<Skills/>}/>
      <Route path ="/Experience" element={<Experience/>}/>
      <Route path ="/Qualification" element={<Qualification/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
  

export default App;
