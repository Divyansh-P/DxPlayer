import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../utils/appslice'
import { Autocomplete_API,Options } from '../utils/const'
import { cacheResults } from '../utils/searchslice'
import { Link } from 'react-router-dom'

const Head = () => {
   const [autosuggest,setautosuggest]=useState('')

   const [suggestions,setsuggestions]=useState([])

   const [showsuggestions,setshowsuggestions]=useState(false)

   const dispatch=useDispatch()

   const cache=useSelector(store=>store.search)
    
  const togglemenuhandler=()=>{
     dispatch(togglemenu())
  }
const getSuggestions=async ()=>{

    const data=await fetch(Autocomplete_API+autosuggest,Options)
    const json =await data.json()
    setsuggestions(json.results)
    dispatch(cacheResults({
      [autosuggest]:json.results
    }))

  } 
useEffect(()=>{
 const timer=setTimeout(() => {
  if(cache[autosuggest]){
    setsuggestions(cache[autosuggest])
  }
  else{
    getSuggestions()
  }
}, 1000); 
return ()=>{
  clearTimeout(timer)
}
},[autosuggest])


  return (
    <div className='grid grid-flow-col p-5 m-2 bg-white sm:sticky sm:top-0 '>
      <div className='flex col-span-2'> <img className='h-6 sm:h-8 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu" onClick={togglemenuhandler} />
    <img className='h-8 mx-8' src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="logo"  />
    </div>
    <div className='col-span-9 px-10' >
    <div  >
    <input className='w-3/4 sm:w-1/2 h-6 border border-grey-400  rounded-l-full sm:h-auto sm:p-2 ' onChange={(e)=>setautosuggest(e.target.value)} onFocus={()=>setshowsuggestions(true)} onBlur={()=>setTimeout(() => {
      setshowsuggestions(false)
    }, 100)} type="text" />
    <button className='border border-grey-400 rounded-r-full bg-gray-50 h-6 sm:h-auto sm:px-5 sm:py-2'>🔍</button>
    </div>
    {suggestions.length>0&&showsuggestions?
      <div className='w-2/5 border-2 border-grey-400 rounded-2xl mt-1 p-4 fixed bg-white'  >
    <ul>
    {
      suggestions.map((sug,ind)=>(
     <Link  key={ind} to={'/search?q='+sug}><li><span className='mr-4'>🔍</span>{sug}</li></Link>
      )
      )
    }  
    </ul>
    </div>
    : null
    }
    
    </div>
    
    </div>
   
  )
}

export default Head
