import Navbar from "./navbar"
import html from "../assets/html-5.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import re from "../assets/react.png"
import node from "../assets/node.png"
import  tail from "../assets/twlogo.jpeg"
import db from "../assets/db.png"
import rd from "../assets/redux.png"
import git from "../assets/git.png"
function Skill() {
   return (
      <div>
         <Navbar></Navbar>

         <div className="h-auto  flex bg-gradient-to-br from-blue-900 via-blue-200 to-blue-300 text-white py-6 px-2">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

               <div className=" h-fit w-fit  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={html} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">HTML</h1>

                     <h5> I have a strong understaning of HTML , the foundation of web development. I can struture web page effectively ,
                        create semantic layouts, and optimize them for accessibility and search engine. My skills include working with tags,attributes,
                        forms , tables,and multimedia intrgration to build functional and user-friendly websites.</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={css} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">CSS</h1>

                     <h5> "I have a solid foundation in CSS, including creating layouts, styling elements, 
                        and using properties like flexbox and grid for responsive design. As a fresher, I am 
                        skilled at designing clean and visually appealing web pages while ensuring consistency and adaptability across devices.
                         I am eager to learn and apply advanced CSS techniques to enhance user experience."</h5>
                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={js} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">JavaScript</h1>

                     <h5> "I have a  understanding of JavaScript, including concepts like variables,
                         data types, functions, loops, and event handling. I can manipulate the DOM to create
                          interactive web pages and have experience using basic debugging techniques. As a fresher,
                           I am eager to explore advanced JavaScript features, frameworks, and libraries to enhance my skills further."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

               <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={re} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">React</h1>

                     <h5> "I have a foundational understanding of React, including concepts like components, props,
                         state management, and JSX. I can build simple and interactive user interfaces by utilizing
                          React's reusable component structure. As a fresher, I am enthusiastic about learning advanced 
                          features like hooks, routing, and context API to develop efficient and scalable applications."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={node} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">Node JS</h1>

                     <h5> "I have a basic understanding of Node.js, including creating and managing servers, handling requests and responses, and working with modules. I can build simple backend applications and connect them with databases. As a fresher, I am eager to enhance my skills in asynchronous programming, RESTful APIs, and integrating Node.js with front-end technologies."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={tail} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">TailWind</h1>

                     <h5> "I have a strong understanding of Tailwind CSS, which allows me to quickly build responsive and visually appealing
                         designs using utility-first classes. I am proficient in customizing the framework to meet project needs, creating 
                         layouts with Flexbox and Grid, and ensuring that applications are mobile-friendly."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={db} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">MangoDB</h1>

                     <h5> "I have a  understanding of MongoDB, including creating databases, collections, and performing CRUD operations. I am familiar with the NoSQL structure and can design simple schemas for storing data efficiently. As a fresher, I am eager to deepen my knowledge of MongoDB's advanced features, such as aggregation, indexing, and working with Mongoose for better data modeling in Node.js applications."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={rd} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">Redux</h1>

                     <h5>"I have a solid understanding of Redux, which I use for state management in React applications. I am experienced in setting up Redux with actions, reducers, and the store, as well as utilizing middleware like Redux Thunk for handling asynchronous operations. I am proficient in managing global state efficiently, ensuring seamless data flow and scalability in complex React apps."</h5>

                  </div>
               </div>

               <div className=" h-fit w-96  flex  flex-col shadow-2xl p-3 rounded-lg">

                  <img style={{ width: "100px", height: "100px", }} className="   rounded-md shadow-md  " src={git} alt="" />

                  <div className="text-black h-fit w-fit p-1">

                     <h1 className="text-2xl font-bold">Git</h1>

                     <h5> "I am proficient in Git, using it for version control and collaboration in software development. I am experienced in creating and managing branches, handling merges and pull requests, and resolving conflicts. I regularly use Git for tracking changes, committing code, and collaborating with teams on platforms like GitHub and GitLab, ensuring efficient and organized development workflows."</h5>

                  </div>
               </div>



            </div>
         </div>
      </div>
   )
}
export default Skill