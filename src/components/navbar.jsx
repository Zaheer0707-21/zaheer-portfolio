import logo from "../assets/main-logo.png"
import { Link } from "react-router-dom"

function Navbar(){
    
     return(
        <>
          <div className=" bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300  h-14 p-2 left-1 flex justify-between items-center sticky top-0 shadow-2xl" >
                 <img src={logo} alt="" className="h-9 w-15" />
                 <div className="flex gap-5 font-bold cursor-pointer ">
                 <p><Link to="/">Home</Link></p>
                 <p><Link to="/about">About</Link></p>
                 <p><Link to="/skill">Skills</Link></p>
                 <p><Link to="/project">Projects</Link></p>
                 <p><Link to ="/contact">Contacts</Link></p>
                 </div>
          </div>  
          </>  
     )
}
export default Navbar
