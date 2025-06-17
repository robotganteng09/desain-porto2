import foto from "../assets/image/foto.png"
import java from "../assets/image/java.png"
import bootstrap from "../assets/image/bootstrap.png"
 import react from "../assets/image/react.png"
 import edubby from "../assets/image/edubby.jpg"
//  import tulalit from "../assets/image/tulalit.jpg"
 import dicoding from "../assets/image/dicoding.jpg"

 

const Homepage = () => {
  return (
    <div className="homePage  items-center min-h-screen bg-gray-900 pt-39">
      <div className="container">
        
        {/* biodata */}
        <div className="biodata" id="biodata">
          <div className="box flex justify-center">
            <img src={foto} alt="" className="w-50 h-50 object-cover rounded-full mb-4 transition ease-in duration-500"/>
          </div>
          <div>
            <p className="nama text-center font-bold font  text-xl sm:text-2xl md:text-3xl text-[#D1F8EF] ">Arsya Muhammad Faisyar </p>
            <p className="role text-center  text-xl sm:text-2xl md:text-3xl text-[#FFF8F8] mt-2">Graphic designer,Front end,UI/UX</p>
          </div>
         
         {/* education */}
    <div className="education mt-24 px-4" id="education"> 
      <p className="education text-center font-bold text-xl sm:text-2xl md:text-3xl text-[#D1F8EF] mt-110">
        Education Background
      </p>
    </div>

  <div className="flex flex-col items-center gap-6">
 
  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-lg transition-transform hover:scale-105 duration-300 mt-10 ">
    <h3 className="text-xl font-bold text-white">2014 - 2021</h3>
    <h2 className="text-xl font-bold text-[#F1EFEC]">SD 2 Demaan</h2>
    <h3 className="text-xl text-[#FFF8F8]">Learn About Excel</h3>
  </div>

  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-lg transition-transform hover:scale-105 duration-300 mt-5">
    <h3 className="text-xl font-bold text-white">2021 - 2024</h3>
    <h2 className="text-xl font-bold text-[#F1EFEC]">SMP 1 Kudus</h2>
    <h3 className="text-xl text-[#FFF8F8]">Learn About Scratch</h3>
  </div>

  <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-lg transition-transform hover:scale-105 duration-300 mt-5">
       <h3 className="text-xl font-bold text-white">2024 - Current</h3>
        <h2 className="text-xl font-bold text-[#F1EFEC]">SMK Raden Umar Said</h2>
        <h3 className="text-xl text-[#FFF8F8]">Learn About Programming</h3>
    </div>
  </div>


       {/* tech stack */}
       <div className=" mx-auto text-center py-10 mt-29 " id="tech-stack">
       <h1 className="text-4xl font-bold mb-6 text-[#D1F8EF]">Skill</h1>
       <div className="grid grid-cols-3 gap-0">
        <div className="p-4 rounded-lg  transition-transform hover:scale-105 duration-300 "> 
         <img src={java} alt="" className="mx-auto h-27"/>
         <p className="text-lg mt-2 text-white">Java</p>
        </div>

       
        <div className="p-4 rounded-lg ransition-transform hover:scale-105 duration-300"> 
         <img src={react} alt="" className="mx-auto h-27 "/>
         <p class="text-lg mt-2 text-white">React.js</p>
        </div>

        

        <div className="p-4 rounded-lg transition-transform hover:scale-105 duration-300"> 
         <img src={bootstrap} alt="" className="mx-auto h-20"/>
         <p className="text-lg mt-2 text-white">Bootstrap </p>
        </div>

        <div className="p-4 rounded-lg transition-transform hover:scale-105 duration-300"> 
         <img src="https://i.pinimg.com/736x/77/34/73/773473a9bf5abf235010141fee44107d.jpg" alt="" className="mx-auto h-20"/>
         <p className="text-lg mt-2 text-white">FLutter</p>
        </div>
       
       </div>
     
      {/* certificate */}
       <div className="certificate py-19" id="certificate" >
        <h1 className="text-4xl font-bold text-center mb-6 text-[#D1F8EF]">Certificate</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 px-6 mt-16">
          
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 duration-300">
        <img src={edubby} alt="" className="" />
        <p className="mt-2 text-2xl text-white text-center font-semibold" >Certificate Front End Web</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 duration-300">
        <img src={dicoding} alt="" className="" />
        <p className="mt-2 text-2xl text-white text-center font-semibold" >Certificate JavaScript</p>
        </div>
        </div>
       </div>


       </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
