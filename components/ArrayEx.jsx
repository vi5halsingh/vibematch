import React, { useState } from 'react'

function Array() {
  const [arr, setval] = useState([1, 2, 3, 4, 5])
  return (
    <div>
      {arr.map((item ,index) => <h2 key={index}>{item}</h2>)}
      <button className='p-1 rounded-md bg-slate-300 font-bold' onClick={() => { setval(() => arr.filter((item, index) => index != arr.length - 1)) }}>don't click</button>
      <button className='p-1 ml-5 text-fuchsia-600 font-bold rounded-md bg-slate-100' onClick={()=>{ setval(() => arr.filter((item, index)=> item%2 == 0 )) }}>even only</button>
      <button className='p-1 ml-5 text-fuchsia-600 font-bold rounded-md bg-slate-100' onClick={()=>{ setval(() => arr.filter((item, index)=> item%2 !== 0 )) }}>odd only</button>
      {arr.map((item , index)=> <h2 key={index}>{item} and {index}</h2> )}
    </div>
  )
}

export default Array;
