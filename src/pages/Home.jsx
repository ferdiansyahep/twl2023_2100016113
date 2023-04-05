import NavScrollExample from '../component/Navbar';
import WithHeaderExample from '../component/Card';
import UncontrolledExample from '../component/Benner' ;
// import './App.css';

const Home = () =>{
    return(
        <div className="App">
        <NavScrollExample />
        {/* <h1>Hello, World!</h1> */}
        <div>
       <UncontrolledExample/>
       </div>
        <WithHeaderExample />
      </div>
    )
}

export default Home 
