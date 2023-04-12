import ApiData from "../component/Jsonxample";
import Navigation from "../component/Navbar";

const Json = () =>{
    return(
    <div className="App">
       <div><Navigation /></div> 
        <div>
          <ApiData/>
        </div>
      </div>
    )
}

export default Json;