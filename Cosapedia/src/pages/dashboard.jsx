import React from 'react'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import Generador from '../components/Generador'
import BotonAdir from '../components/botonAdir'
import Comp from '../components/comp'
import Buscador from '../components/buscador'

const  Dashboard = () => {
const [count, setCount] = useState(0)
const [open, setOpen] = useState(false)

const Opening= ()=>{setOpen(!open)}
  return (
    <div width="100%" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{display: 'flex', justifyContent: 'center'}}>CosaPedia</h1>
        <span style={{display: 'flex', justifyContent: 'center', flex: 1, width: '100%'}}>
          <Buscador/> <BotonAdir func={Opening} />
        </span>
        {    open ?
            <Generador/>
            :
            <></>
        }
        <Comp/>
    </div>
  )
}

export default Dashboard
