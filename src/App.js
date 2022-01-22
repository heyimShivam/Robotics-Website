import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RoboNavBar from './components/navbar';
import Routing from './routing/routing';

function App() {
  return (
    <div>
      <Router>
        <RoboNavBar />
        <Routing />
      </Router>
    <video className='background-video' autoPlay loop muted>
      <source src="videos/pexels-pavel-danilyuk-8084632.mp4" type='video/mp4' />
    </video>
    </div>
  );
}

export default App;
