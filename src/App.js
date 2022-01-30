import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RoboNavBar from './components/navbar';
import Routing from './routing/routing';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <RoboNavBar />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
