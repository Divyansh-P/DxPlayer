import React from 'react'
import RelatedvideoCard from './RelatedvideoCard'
import { Link } from 'react-router-dom'
const RelatedPage = ({vinfo}) => {
  return (
    <div className=' mt-8 ml-3 h-3/4 sm:ml-32 sm:mt-0'>
      <div className='mb-5 text-2xl'>Related Videos</div>
      <div className='w-96 h-full sm:overflow-y-scroll'>
      {
        vinfo.map((info)=>(
          <Link key={info.video.videoId} to={"/watch?v="+info.video.videoId} ><RelatedvideoCard info={info}/></Link>
        ))
      }
       
      </div>
    </div>
  )
}

export default RelatedPage
