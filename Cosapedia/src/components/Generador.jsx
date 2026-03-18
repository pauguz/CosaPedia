import React from "react"
function Generador(){
    return <div style={{width:'50%', border: '2px solid', borderRadius: '5px', marginTop: '4px'}}>
        <h2>Escoge el Tipo</h2>
        
        <span>
            <input name='tipo' type="radio" id="1"/> <label htmlFor="1"> Persona</label>
            <input name='tipo' type="radio" id="2"/> <label htmlFor="2"> Libro</label>
            <input name='tipo' type="radio" id="3"/> <label htmlFor="3"> Evento</label>
        </span>
    </div>
    
}

export default Generador