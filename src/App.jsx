import { useState } from "react"
import './App.css'

function App() {
  let [color,setColor]=useState("olive")
return(
  <div className="w-full h-screen duration-200" 
  style={{backgroundColor : color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
  <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
  <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-800">Red</button>
  <button onClick={()=>{setColor("green")}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-800">Green</button>
  <button onClick={()=>{setColor("black")}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">Black</button>
  <button onClick={()=>{setColor("blue")}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-800">Blue</button>
  <button onClick={()=>{setColor("yellow")}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-800">Yellow</button>
  <button onClick={()=>{setColor("purple")}}className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-800">Purple</button>
  <button onClick={()=>{setColor("pink")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-800">Pink</button>
  <button onClick={()=>{setColor("white")}}className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-white">White</button>

  </div>
</div>
  </div>
)
}


export default App
