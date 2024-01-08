import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closemenu } from '../utils/appslice'
import { useSearchParams } from 'react-router-dom'
import { Options, RelatedVideo_API, Video_Info, abbrNum } from '../utils/const'
import RelatedPage from './RelatedPage'

const WatchPage = () => {
  const dispatch=useDispatch()
  const [searchparams,setsearchparams]=useSearchParams()
  const [relatedvideos,setrelatedvideos]=useState([])
  const getVideoInfo=async ()=>{
    const url=Video_Info+searchparams.get("v")
    const data=await fetch(url)
    const json=await data.json()
    setvideoinfo(json.items[0])
    const url2=RelatedVideo_API+searchparams.get("v")
const data2=await fetch(url2,Options)
const json2=await data2.json()
setrelatedvideos(json2.contents)
   }


  useEffect(()=>{
    getVideoInfo()
  dispatch(closemenu())
  
  },[searchparams.get("v")])
  
  console.log(relatedvideos)
 
  const [videoinfo,setvideoinfo]=useState({snippet:{title:'',channelTitle:''},statistics:{viewCount:'',likeCount:''}})

  const count=abbrNum(videoinfo.statistics.viewCount,2)
  const likes=abbrNum(videoinfo.statistics.likeCount,2)

  return (
    <div className='flex flex-col h-screen sm:flex-row w-full'>
    <div className='flex flex-col sm:ml-12 w-3/5' >
    <iframe className='w-96 ml-3 h-48 sm:w-full sm:ml-0 sm:h-2/3 sm:rounded-2xl ' src={"https://www.youtube.com/embed/"+searchparams.get("v")} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
 <ul className='mt-5 px-3 w-screen'>
  <li className='text-base sm:text-lg font-semibold'>{videoinfo.snippet.title}</li>
  <li className='text-xs sm:text-sm my-3'>{videoinfo.snippet.channelTitle}</li>
  <li className='text-xs sm:text-sm'><span>{count} views</span> <span> {likes} likes</span></li>
  </ul> 
    </div>
    <RelatedPage vinfo={relatedvideos}/>
  

    </div>
  )
}

export default WatchPage


