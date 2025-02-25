import React, { useState } from 'react'
import '../src/index.css'

function Box() {
  const [data, setData] = useState([
  {
    img: './assets/copy.jpg',
    name: "Albumb",
    discription: "check out this amazing Album",
    more: true,
    like: 0
  },
  {
    img: './assets/copy.jpg',
    name: "Album",
    discription: "check out this amazing Album",
    more: true,
    like: 0
  },
  {
    img: './assets/copy.jpg',
    name: "Album",
    discription: "comming a great surprise with this album",
    more: false,
    like: 0
  },
  {
    img: './assets/copy.jpg',
    name: "Album",
    discription: "comming a great surprise with this album",
    more: false,
    like: 0
  }
  ])
  const handleLike = (index) => {
const newdata = [...data]
newdata[index].like = newdata[index].like + 1;
setData(newdata)
  }
  return (
    <>
      <div className='w-full h-80 flex flex-wrap items-center justify-center gap-10 bg-transparate'>
        {data.map((elem, index) => (
          <div className='w-52 bg-zinc-900 rounded-md overflow-hidden m-0 text-slate-100' key={index}>
            <div className='w-full h-32 bg-zinc-500 '>
              <img className='w-full h-full object-cover' src='' alt="mage" />
            </div>
            <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'>{elem.name}</h2>
              <p>{elem.discription}</p>
            </div>
            <button className={`rounded m-2 ${elem.more ? "bg-green-500" : "bg-red-500"} px-2 py-1 font-semibold cursor-pointer`}> {elem.more ? "Uploaded" : "Upcoming"}</button>
            <button className='bg-lime-800 font-medium  rounded-md px-1' onClick={()=>handleLike(index)}>Like:{elem.like}</button>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default Box;
