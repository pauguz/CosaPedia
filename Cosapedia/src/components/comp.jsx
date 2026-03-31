import React, { useState, useEffect } from 'react'
import { pageService } from '../services/pageService'
import PageCard from './pageCard';
const Comp = () => {
  const [output, setOutput]= useState('');
  const [page, setPage]= useState('');
  const muestra = ( )=>{console.log(output);}
  const llamada = async (id = 2) => {
    const pags = await pageService.perUser(id); 
    console.log("Datos recibidos del service:", pags); // Esto sí mostrará los datos
    setOutput(pags.map( (ob)=>Object.entries(ob) )); 
  };

  const callPage = async (id=2)=>{
    const pag = await pageService.perId(id); 
    setPage( pag); 
    console.log("Datos recibidos del service:", page); 

  }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <button onClick={()=>callPage(2) } style={{ flexGrow:'0'}}>Llamada</button>
      <PageCard pagina={page}/>
    </div>

  )
}

export default Comp
