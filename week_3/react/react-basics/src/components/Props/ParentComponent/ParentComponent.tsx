import React from 'react'
import Button from '../ChildComponent/Button'

function ParentComponent() {
  return (
    <>
        <Button message="button1" bgColor="blue"/>
        <Button message="button2"/>
    </>
  )
}

export default ParentComponent