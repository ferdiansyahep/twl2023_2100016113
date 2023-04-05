// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Services from './pages/Services';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/ >
        <Route path='/About' element={<About/>}/ >
        <Route path='/Services' element={<Services/>}/ >
      </Routes>
    </Router>
  );
}



export default App;
