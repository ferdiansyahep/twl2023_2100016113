import Navigation from '../component/Navbar';
import Footer from '../component/Footer';
// import WithHeaderExample from '../component/Card';
import UncontrolledExample from '../component/Benner' ;
import AboutPage from "../component/Second";
// import ApiData from "../component/Second";

// import './App.css';

const Home = () =>{
    return(
        <div className="App">
       <div><Navigation /></div> 
        <div>
       <UncontrolledExample/>
       </div>

        <div>
          <AboutPage/>
          {/* <ApiData/> */}
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
}

export default Home 
