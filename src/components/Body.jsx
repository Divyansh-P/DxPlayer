import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
MainContainer
const Body = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    
    </div>
  )
}

export default Body
