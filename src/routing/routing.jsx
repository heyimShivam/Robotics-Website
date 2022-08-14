import { Routes, Route } from 'react-router-dom';
import Footer from '../components/footer';
import Home from '../pages/home';
import Gallery from '../pages/gallery';
import Members from '../pages/members';

import Alumni from '../pages/alumni';

import Achievements from '../pages/Achievements';
import About from '../components/about';

function Routing() {
    return (    
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/Achievements' element={< Achievements />}></Route>
        <Route exact path='/contact' element={< Gallery />}></Route>
        <Route exact path='/gallery' element={< Gallery />}></Route>
        <Route exact path='/members' element={< Members />}></Route>
        <Route exact path='/alumni' element={< Alumni />}></Route>
      </Routes>
    );
  }
  
  export default Routing;