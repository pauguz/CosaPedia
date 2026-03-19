import React, { useState, useEffect } from 'react'
import { pageService } from '../services/pageService'
const Comp = () => {
  const [output, setOutput]= useState('');
  const muestra = ( )=>{console.log(output);}
  const llamada = async (id = 2) => {
    const pags = await pageService.perUser(id); 
    console.log("Datos recibidos del service:", pags); // Esto sí mostrará los datos
    setOutput(pags.map( (ob)=>Object.entries(ob) )); 
  };



  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <button onClick={()=>llamada(2) } style={{ flexGrow:'0'}}>Llamada</button>
      {output}
    </div>
  )
}

export default Comp
