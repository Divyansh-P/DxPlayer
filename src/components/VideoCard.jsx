import React from 'react'

const VideoCard = ({info}) => {
  const {snippet,statistics}=info
  const {thumbnails,title,channelTitle}=snippet
  const {viewCount}=statistics
  console.log(title)
  return (
    <div className='shadow-lg p-2 m-2 w-72'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
      <li className='font-bold truncate text-sm '>{title}</li>
      <li className='text-xs'>{channelTitle}</li>
      <li className='text-xs'>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
