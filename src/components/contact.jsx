   import Navbar from "./navbar"
   import { FaInstagram } from "react-icons/fa"
   import { FaGithub } from "react-icons/fa"
   import { FaLinkedin } from "react-icons/fa"
   import { FaWhatsapp } from "react-icons/fa"

   function Contact(){
      return(
         <>
         <Navbar></Navbar>
 
         <div className=" min-h-screen   flex justify-center items-center bg-gradient-to-br from-blue-900 via-blue-200 to-blue-300 text-white py-12 px-4">
             <div className="bg-transparent h-96  w-auto">

               <div className="flex items-center  ">
               <FaInstagram style={{color:"#E4405F",fontSize:"40px"}}></FaInstagram>
               <a href="https://www.instagram.com/zaheer_x07/" target="_blank" rel="noopener noreferrer" className="text-black" > " click here " you can contact me on Instagram </a>
               </div>

               <div className="flex items-center mt-7">
               <FaWhatsapp style={{color:"green",fontSize:"40px"}}></FaWhatsapp>
               <a href="https://wa.me/+918925074290" target="_blank" rel="noopener noreferrer" className="text-black" > " click here " you can contact me on WhatsApp </a>
               </div>

               <div className="flex items-center mt-7">
               <FaLinkedin style={{color:"blue",fontSize:"40px"}}></FaLinkedin>
               <a href="https://www.linkedin.com/posts/zaheer-abbas-926230297_mernstack-firebase-webdevelopment-activity-7269381615414304768-KPBP?utm_source=share&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-black" > " click here " you can contact me on LinkedIn </a>
               </div>

               <div className="flex items-center mt-7">
               <FaGithub style={{color:"grey",fontSize:"40px"}}></FaGithub>
               <a href="https://github.com/Zaheer0707-21/udemy-react" target="_blank" rel="noopener noreferrer" className="text-black" > " click here " you can contact me on GitHub </a>
               </div>
                     
                   
                      
             </div>
        </div>
        </>
      )
   }
   export default Contact