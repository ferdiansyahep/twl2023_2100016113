import Contactme from '../component/Contact';
import NavScrollExample from '../component/Navbar';
import Footer from '../component/Footer';
const Contact = () =>{
    return(
        <div className="App">
        <NavScrollExample />

        <Contactme />
        {/* <h1>Hello, World!</h1> */}
        <div>
          <Footer/>
        </div>
      </div>
    )
}

export default Contact 