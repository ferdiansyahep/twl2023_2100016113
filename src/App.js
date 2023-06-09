// import logo from './logo.svg';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Json from "./pages/Jsonxample";


const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/ >
        <Route path='/About' element={<About/>}/ >
        <Route path='/Services' element={<Services/>}/ >
        <Route path='/Contact' element={<Contact/>}/ >
        <Route path='/Jsonxample' element={<Json/>}/ >
      </Routes>
    </Router>
  );
};



export default App;
