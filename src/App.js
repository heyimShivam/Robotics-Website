import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RoboNavBar from './components/navbar';
import Routing from './routing/routing';
import Footer from './components/footer';
import React, { useState } from 'react';


function App() {

  const [location, setLocation] = useState('');

  const changeLocation = (loc) =>{
    setLocation(loc.pathname)
  }

  return (
    <div>
      <Router>
        <RoboNavBar loc={location} />
        <Routing changeloc={changeLocation}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
