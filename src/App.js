
import './App.css';
import { BrowserRouter as Router , Route,  Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Year } from './components/Year';
import Syear from './components/Syear';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='/year' element={<Year/>} />
        <Route path='/select' element={<Syear/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
