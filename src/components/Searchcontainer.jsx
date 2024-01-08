import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import SearchVideocard from './SearchVideocard'
import { Searchinfo_API } from '../utils/const'

const Searchcontainer = () => {

    const[searchparams,setsearchparams]=useSearchParams()
    
    const [searchvideoinfo,setsearchvideoinfo]=useState([{id:{videoId:''},snippet:{title:'',channelTitle:'',description:'',thumbnails:{medium:{url:''}}}}])
   
    const getvideoinfo=async()=>{
      const searchterm=searchparams.get("q").replace(/ /g,"%20")
     const url= Searchinfo_API+searchterm
    
     const data=await fetch(url)
     const json=await data.json()
     setsearchvideoinfo(json.items)
    }
    useEffect(()=>{
       getvideoinfo()
    },[])
  if(searchvideoinfo.length>0){
    return (
    <div className='flex flex-col' >
    <div className='px-10 pt-2 text-xl sm:px-20 sm:pt-5 font-sans font-bold sm:text-3xl'>Results</div>

    {
        searchvideoinfo.map((vinfo)=>(
          
      <Link key={vinfo.id.videoId} to={'/watch?v='+vinfo.id.videoId} ><SearchVideocard info={vinfo}/></Link>
     ))
      
    
    }
      
    
      
    </div>
  )
  }
  else{
    return null
  }
 
}

export default Searchcontainer


