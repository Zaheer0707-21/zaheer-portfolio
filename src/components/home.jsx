
import logo from "../assets/main-logo.png"
import one from "../assets/pic-zah.png"
import { Link } from "react-router-dom"


function Home() {

    return (
        <>
            <div className=" bg-gradient-to-br from-blue-300 via-blue-200 to-blue-300 h-14 p-2 left-1 flex justify-between items-center sticky top-0 shadow-2xl " >
                <img src={logo} alt="" className="h-9 w-15" />
                <div className="flex gap-5 font-bold cursor-pointer ">
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/skill">Skills</Link></p>
                    <p><Link to="/project">Projects</Link></p>
                    <p><Link to="/contact">Contacts</Link></p>
                </div>
            </div>

            <div className="flex justify-center items-center h-lvh gap-24 min-h-screen   bg-gradient-to-br from-blue-900 via-blue-200 to-blue-300 text-white py-12 px-4">


                <div className=" text-2xl font-bold">
                    <h1 >Hi,</h1>
                    <h1>I am Zaher Abbass </h1>
                    <h1>A Mern Stack Developer</h1>
                    <Link to="/project"><button className="bg-blue-400 text-white rounded-2xl p-2 m-2" >Explore</button></Link>


                </div>

                <div className="">
                    <img className="h-72 w-72 " src={one} alt="" />


                </div>




            </div>

        </>
    )
}

export default Home