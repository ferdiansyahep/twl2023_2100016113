import Aboutus from "../component/About";
import NavScrollExample from '../component/Navbar';
import Footer from '../component/Footer';

const About = () =>{
    return(
        <div className="App">
        <NavScrollExample />

        <Aboutus />
        {/* <h1>Hello, World!</h1> */}
        <div>
          <Footer/>
        </div>
      </div>
    )
}

export default About