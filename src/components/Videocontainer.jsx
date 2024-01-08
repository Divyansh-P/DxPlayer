import React, { useEffect, useState } from 'react'
import { Home_Video } from '../utils/const'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Videocontainer = () => {
  
  const cat=useSelector(store=>store.home.category)

  const getvideo=async ()=>{
    let url=Home_Video
    if(cat!=0){
    url=url+"&videoCategoryId="+cat
    }
  const data=await fetch(url)
  const json=await data.json()
  setvideos(json.items)
  }
  const [videos,setvideos]=useState([])
  useEffect(()=>{
  getvideo()
  },[cat]);
  
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
