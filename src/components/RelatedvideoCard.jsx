import React from 'react'
import { abbrNum } from '../utils/const'

const Relatedvideocard = ({info}) => {
    const {video}=info
  const {author,stats,thumbnails,title}=video

  const count=abbrNum(stats.views,2)

  return (
    <div className='flex w-80 m-5'>
    <img className='rounded-lg border border-grey w-36 h-auto' src={thumbnails[0].url} alt="" />
      <div className='ml-2 w-52'>
      <ul >
      <li className='font-sans font-semibold text-sm truncate m-2 '>{title}</li>
      <li className='font-sans font-semibold  text-xs m-2 '>{author.title}</li>
      <li className='font-sans  text-xs m-2 '>{count} views</li>
      </ul>
      </div>

    </div>
  )
}

export default Relatedvideocard