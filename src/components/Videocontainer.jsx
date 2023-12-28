import React, { useEffect, useState } from 'react'
import { Home_Video } from '../utils/const'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
const Videocontainer = () => {
  const getvideo=async ()=>{
  const data=await fetch(Home_Video)
  const json=await data.json()
  setvideos(json.items)
  }
  const [videos,setvideos]=useState([])
  useEffect(()=>{
  getvideo()
  },[]);
  
  return (
    <div className='flex flex-wrap justify-evenly'>
   {videos.map((video)=>(
    <Link key={video.id} to={"/watch?v="+video.id}>
    <VideoCard  info={video}/>
    </Link>
   ))
  }
   
    </div>
  )
}

export default Videocontainer
