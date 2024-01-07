import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const ismenuopen=useSelector(store=>store.app.ismenuopen)
   if(!ismenuopen) return null

  return (
    <div className='p-5  shadow-lg w-48 h-fit'>
    <ul>
      <li><Link to={'/'}> Home</Link></li>
      <li>Shorts</li>
     
      </ul>
      <h1 className='font-bold'>Subscription</h1>
      <ul>
      <li>Music</li>
      <li>Gaming</li>
      <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
      <li>Music</li>
      <li>Gaming</li>
      <li>Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar
