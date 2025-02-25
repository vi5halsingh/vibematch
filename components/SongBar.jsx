import { useState } from "react";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
 function SongBar(){
  const song = [{
    name:"jai shree ram",
    details:"hey this song for you only"

  },
  {
    name:"jane bo kaise log the..",
    details:"hey this song for you only"

  },
  {  
    name:"jeena isi ka naam hai",
    details:"hey this song for you only"

  },
]

const clickOnPlay = ()=>{
alert("playing...")
}
return <>
<div className="w-full border-current shadow-lg h-40 flex flex-wrap gap-10 items-center justify-center">
    {song.map((item, index) => (
        
        <div className="bg-sky-200 w-60 rounded-md mr-1 px-1 " key={index}>
    <h2 className="font-bold">{item.name}</h2>
    <div>{item.details}</div>
    <button onClick={clickOnPlay} className="px-2 py-1 bg-green-400 rounded font-semibold text-black m-1 hover:(-50)"><FaRegCirclePlay size={"1.5em"}/></button>
    </div>
))}
   
</div>
</>
 }
 export default SongBar;