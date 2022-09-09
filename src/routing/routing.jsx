import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Gallery from '../pages/gallery';
import Members from '../pages/members';
import Achievements from '../pages/achievements';
import Alumni from '../pages/alumni';
import Projects from '../components/projects/projects';
import About from '../components/about';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Routing(props) {
  const location = useLocation();

  useEffect(()=>{
    props.changeloc(location);
  },[])
  // props.changeLocation(location)

    return (    
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/Achievements' element={< Achievements />}></Route>
        <Route exact path='/contact' element={< Gallery />}></Route>
        <Route exact path='/gallery' element={< Gallery />}></Route>
        <Route exact path='/members' element={< Members />}></Route>
        <Route exact path='/alumni' element={< Alumni />}></Route>
        <Route exace path='/activities' element={<Projects />}></Route>
      </Routes>
    );
  }
  
  export default Routing;