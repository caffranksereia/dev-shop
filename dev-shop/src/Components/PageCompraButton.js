import React from 'react';
import {useHistory} from 'react-router-dom'


export default function PageCompraButton(){
    const historia = useHistory()
    return( 
    <div  >
           <button id="button" onClick={
                    ()=>{
                        historia.push("/Compras")
                    }
                }>Comprar </button>
        </div>
    );
}