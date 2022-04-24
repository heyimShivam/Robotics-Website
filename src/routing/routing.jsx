import { Routes, Route } from 'react-router-dom';
import Footer from '../components/footer';
import Home from '../pages/home';
import GalleryPage from '../pages/gallery'
import Members from '../pages/members';

function Routing() {
    return (    
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< Footer />}></Route>
        <Route exact path='/contact' element={< GalleryPage />}></Route>
        <Route exact path='/contact' element={< GalleryPage />}></Route>
        <Route exact path='/gallery' element={< GalleryPage />}></Route>
        <Route exact path='/members' element={< Members />}></Route>
      </Routes>
    );
  }
  
  export default Routing;