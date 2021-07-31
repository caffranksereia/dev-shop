import React from 'react';
import { useHistory } from 'react-router-dom';
import BuyCar from '../Services/BuyCar'

export default function BuyingCar (){
    
    
   const historia = useHistory()
   
    function Comprando(){
        historia.push("/Comprando")
    }
        
        return(
            
            <div>
                <div>
                    <h1>Carrinho de compras</h1>
                </div> 
               
               
               <div>
                   <button>Detalhe</button>
               </div>
               <div>
                   <h1>Valor Total:</h1>
                   <p></p>
               </div>
               <div>
                    <button onClick ={Comprando()}>
                            Comprar
                        
                    </button>
               </div>

                
            </div>
        );
    
    
    
       
  

}

