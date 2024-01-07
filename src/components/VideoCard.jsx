import React from 'react'
import { abbrNum } from '../utils/const'

const VideoCard = ({info}) => {
  const {snippet,statistics}=info
  const {thumbnails,title,channelTitle}=snippet
  const {viewCount}=statistics
  const count=abbrNum(viewCount,2)
  return (
    <div className=' p-2 m-2 w-72'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
      <li className='font-semibold font-sans text-base '>{title}</li>
      <li className='text-sm font-sans '>{channelTitle}</li>
      <li className='text-sm font-sans '>{count} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
