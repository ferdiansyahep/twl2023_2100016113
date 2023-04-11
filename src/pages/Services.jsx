import ServicesPage from '../component/Services';
import NavScrollExample from '../component/Navbar';
import Footer from '../component/Footer';
const Services = () =>{
    return(
        <div className="App">
        <NavScrollExample />

        <ServicesPage />
        {/* <h1>Hello, World!</h1> */}
        <div>
          <Footer/>
        </div>
      </div>
    )
}

export default Services 