import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Box from '../components/Box';
import SongBar from '../components/SongBar';
import Array from '../components/ArrayEx';
import Card from '../components/card';
import { FaPlayCircle } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function App() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1730616671068-e19a0cf2f12c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "vishal",
      favorate_language: "hindi",
      like: 0,
      friend: false
    },
    {
      img: "https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFjayUyMHNwYXJyb3d8ZW58MHx8MHx8fDA%3D",
      Name: "vishal",
      like: 0,
      favorate_language: "hindi",
      friend: false
    },
    {
      img: "https://images.unsplash.com/photo-1729554608003-5ec8be42da1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D",
      Name: "vishal",
      like: 0,
      favorate_language: "hindi",
      friend: false
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      Name: "Dr. Rakesh Sharma",
      specialty: "Cardiologist",
      location: "Mumbai, Maharashtra",
      favorate_language: "Hindi",
      like: 45,
      friend: true
    },
    {
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      Name: "Dr. Priya Singh",
      specialty: "Dermatologist",
      location: "Delhi, India",
      favorate_language: "English",
      like: 33,
      friend: false
    },
    {
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      Name: "Dr. Arjun Patel",
      specialty: "Pediatrician",
      location: "Bengaluru, Karnataka",
      favorate_language: "Kannada",
      like: 20,
      friend: true
    },
  ]
  const [newData, setValue] = useState(data)
  const hendleFrinedStatus = (cardIndex) => {
    setValue((previous) => {
      return previous.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friend: !item.friend }
        }
        return item
      })
    })
  }
  const handleLike = (cardIndex) =>{
  setValue((p) => {
    return p.map((item, index) => {
      if(index === cardIndex){
        return {...item , like:item.like + 1}
      }
      return item
    })
  }
)}


  return (<>
    <div className='bg-slate-600 w-50'>
      <NavBar/>
      <div className='pt-20'>

      <Box/>
      </div>
      <SongBar />
      
      <div className='w-full flex align-center justify-center gap-5 shadow-2xl  shadow-black p-5 overflow-auto '>
        {newData.map((item, index) => (
          <Card values={item} friend={item.friend} key={index} index={index} friendOnClick={hendleFrinedStatus} likeOnClick ={handleLike}/>
        ))
        }
      </div>

    </div>
  </>
  )
}
