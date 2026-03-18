import React from 'react'
import {handleClick} from '../Tests/dummy'

const BotonAdir = ({func=handleClick }) => {
  return (
    <button onClick={func}>
      +
    </button>
  )
}

export default BotonAdir
