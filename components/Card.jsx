import React, { useState } from 'react';
import { GrLike } from "react-icons/gr";

function Card({ values, index, friendOnClick, friend, likeOnClick }) {

  return (
    <>
      <div className=' hover:mix-blend-overlay w-64 rounded-md  '>

        <div className='rounded-md  hover:mix-blend-overlay w-full h-35'>
          <div className='w-full p-2 bg-slate-400 rounded-md'>
            <img src={values.img} alt="" className='rounded-md h-40 w-full w-30' />
            <h2 className='font-semibold text-xl'>{values.Name}</h2>
            <p className='text-base m-0'>{values.favorate_language}</p>
            <div className='flex justify-center items-center'>

              <button className=' border-black border-2 m-2 w-20 h-8 rounded-md px-3 py-1 ml-5 text-white font-semibold text-50 text-center flex items-centre justify-between	' onClick={() => likeOnClick(index)}> <GrLike size={"1.5em"} /> {values.like}</button>

              <button className={`${friend === true ? "bg-green-800" : "bg-blue-800"} rounded-md px-3 py-1 ml-5 w-28 h-8 text-sm text-white font-semibold `} onClick={() => friendOnClick(index)}>{friend === true ? "friend" : "Add Friend"} </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;
