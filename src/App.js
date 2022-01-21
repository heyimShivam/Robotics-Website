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
    </div>
  );
}

export default App;
