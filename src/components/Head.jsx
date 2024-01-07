import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { togglemenu } from '../utils/appslice'
import { Autocomplete_API,Options } from '../utils/const'
import { cacheResults } from '../utils/searchslice'

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
    //getSuggestions()
  }
}, 500); 
return ()=>{
  clearTimeout(timer)
}
},[autosuggest])


  return (
    <div className='grid grid-flow-col p-5 m-2 bg-white sticky top-0'>
      <div className='flex col-span-2'> <img className='h-8 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu" onClick={togglemenuhandler} />
    <img className='h-8 mx-2' src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="logo"  />
    </div>
    <div className='col-span-9 px-10'>
    <div>
    <input className='w-1/2 border border-grey-400 p-2 rounded-l-full' onChange={(e)=>setautosuggest(e.target.value)} onFocus={()=>setshowsuggestions(true)} onBlur={()=>setshowsuggestions(false)} type="text" />
    <button className='border border-grey-400 px-5 py-2 rounded-r-full bg-gray-50'>🔍</button>
    </div>
    {suggestions.length>0&&showsuggestions?
      <div className='w-2/5 border-2 border-grey-400 rounded-2xl mt-1 p-4 fixed bg-white'>
    <ul>
    {
      suggestions.map((sug,ind)=>(
        <li key={ind}><span className='mr-4'>🔍</span>{sug}</li>
      ))
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
