import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index'

const App = () => {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}

export default App;

