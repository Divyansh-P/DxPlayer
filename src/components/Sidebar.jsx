import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { categories } from '../utils/const'
import { getcategory } from '../utils/homeslice'
import parse from 'html-react-parser';
import {FaHome, FaFilm,FaCar,FaMusic,FaGamepad,FaLaughSquint,FaNewspaper } from "react-icons/fa";
import { MdOutlinePets, MdOutlineSportsBasketball } from "react-icons/md";
import {GiDramaMasks} from "react-icons/gi"
import {FcBiotech} from 'react-icons/fc'

const Sidebar = () => {
  const ismenuopen=useSelector(store=>store.app.ismenuopen)
   if(!ismenuopen) return null
   const dispatch=useDispatch()
   const videoHandler=(id)=>{
    dispatch(getcategory(id))
   }

  return (
    <div className='p-5  shadow-lg w-52 min-h-full  '>
    <ul>
    <Link to={'/'}><li className='text-base flex'><FaHome className='mr-3'  style={{height:'1.7rem'}} /> Home</li></Link>
      </ul>
      <h1 className='font-bold text-3xl mt-8'>Explore</h1>
      <ul>
      {
        categories.map((cate)=>{
          
          return(  
            <li className='cursor-pointer text-base my-8 flex' key={cate.id} onClick={()=>videoHandler(cate.id)}><cate.icon className='mr-3' style={{height:'1.7rem'}}/>{cate.name}</li> 
          
        )
        }
      )
        
      }
      
      </ul>
    </div>
  )
}

export default Sidebar
