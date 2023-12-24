import React from 'react'
import Button from './Button'
const Buttonlist = () => {
  return (
    <div className='flex'>
     <Button name="ALL"/>
     <Button name="Music"/>
     <Button name="Live"/>
     <Button name="Gaming"/>
     <Button name="Cooking"/>

    </div>
  )
}

export default Buttonlist
