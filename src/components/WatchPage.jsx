import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import { Video_Info, abbrNum } from '../utils/const'

const WatchPage = () => {
  const dispatch=useDispatch()
  const [searchparams,setsearchparams]=useSearchParams()
  const getVideoInfo=async ()=>{
    const url=Video_Info+searchparams.get("v")
    const data=await fetch(url)
    const json=await data.json()
    setvideoinfo(json.items[0])
   }

  useEffect(()=>{
    getVideoInfo()
  dispatch(closemenu())

  },[])

 
  const [videoinfo,setvideoinfo]=useState({snippet:{title:'',channelTitle:''},statistics:{viewCount:'',likeCount:''}})
  const count=abbrNum(videoinfo.statistics.viewCount,2)
  const likes=abbrNum(videoinfo.statistics.likeCount,2)

  return (
    <div className='flex flex-col ml-24' >
    <iframe className=' rounded-3xl' width="1000" height="500" src={"https://www.youtube.com/embed/"+searchparams.get("v")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
 <ul className='mt-5 px-3'>
  <li className='text-lg font-semibold'>{videoinfo.snippet.title}</li>
  <li className='text-sm my-3'> {videoinfo.snippet.channelTitle}</li>
  <li className='text-sm'><span>{count} views</span> <span> {likes} likes</span></li>
  </ul> 
    </div>
  )
}

export default WatchPage


