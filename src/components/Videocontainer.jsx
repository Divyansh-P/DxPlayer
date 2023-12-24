import React, { useEffect, useState } from 'react'
import { YT_API_KEY } from '../utils/const'
import VideoCard from './VideoCard'
const Videocontainer = () => {
  const getvideo=async ()=>{
  const data=await fetch(YT_API_KEY)
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
    <VideoCard key={video.id} info={video}/>
   ))
  }
   
    </div>
  )
}

export default Videocontainer
