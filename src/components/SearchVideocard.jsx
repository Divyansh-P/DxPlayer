import React from 'react'

const SearchVideocard = ({info}) => {
const {snippet}=info
const {title,description,thumbnails,channelTitle}=snippet

  return (
    <div className='flex flex-col sm:flex-row py-5 sm:px-20 sm:py-10'>
    <img className=' sm:rounded-lg border border-grey' src={thumbnails.medium.url} alt="" />
      <div className='ml-2'>
      <ul >
      <li className='text-base font-sans font-semibold sm:text-lg m-2 sm:m-5'>{title}</li>
      <li className='text-xs font-sans font-semibold sm:text-sm  m-2 sm:m-5'>{channelTitle}</li>
      <li className='text-xs font-sans  sm:text-sm  m-2 sm:m-5'>{description}</li>
      </ul>
      </div>

    </div>
  )
}

export default SearchVideocard
