import Navbar from "./navbar"
import udemy from "../assets/udemy-app.png"
import weather from"../assets/weather.png"
import gallery from "../assets/gallery-app.png"
import jock from "../assets/joke.png"
import actodo from "../assets/actodo.png"

function Project() {


    return (

        <>
            <Navbar></Navbar>

            <div className=" min-h-screen  bg-gradient-to-br from-blue-900 via-blue-200 to-blue-300 text-white py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">

                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={udemy} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">udemy -clone</h1>

                            <h5>fully functional website and all essential aspects of design.</h5>

                            <h6 className="font-light text-sm">HTML, CSS, JavaScript, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/udemy-react" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://udemy-react-pdxe1n6as-zaheer0707-21s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={weather} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">Weather-app</h1>

                            <h5> you can check any location  of Weather tempreture</h5>

                            <h6 className="font-light text-sm">Axios, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/weather-app" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://weather-app-mu-five-44.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={gallery} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">udemy -clone</h1>

                            <h5>fully functional website and all essential aspects of design.</h5>

                            <h6 className="font-light text-sm">HTML, CSS, JavaScript, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/gallery-app" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://gallery-relgvwtco-zaheer0707-21s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={jock} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">udemy -clone</h1>

                            <h5>fully functional website and all essential aspects of design.</h5>

                            <h6 className="font-light text-sm">HTML, CSS, JavaScript, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/random-joke" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://random-joke-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={actodo} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">udemy -clone</h1>

                            <h5>fully functional website and all essential aspects of design.</h5>

                            <h6 className="font-light text-sm">HTML, CSS, JavaScript, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/Actodo-app" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://actodo-app-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=" h-auto w-96 bg-blue-200 flex  flex-col shadow-2xl p-3 rounded-lg">

                        <img style={{ width: "100%" }} className=" object-cover mb-4 rounded-md shadow-xl  " src={udemy} alt="" />

                        <div className="text-black h-fit w-fit p-1">

                            <h1 className="text-2xl font-bold">udemy -clone</h1>

                            <h5>fully functional website and all essential aspects of design.</h5>

                            <h6 className="font-light text-sm">HTML, CSS, JavaScript, Tailwindcss, React.js</h6>


                            <div className="flex  gap-5  p-2" >

                                <a href="https://github.com/Zaheer0707-21/udemy-react" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px", }}>GITHUB</button>
                                </a>

                                <a href="https://udemy-react-pdxe1n6as-zaheer0707-21s-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-400 shadow-md font-semibold " style={{ padding: "5px", borderRadius: "10px" }}>VERCEL</button>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )

}
export default Project