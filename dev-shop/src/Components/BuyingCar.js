import React from 'react';
import { useHistory } from 'react-router-dom';
import api from '../Services/api';

export default function BuyingCar (props){
    let historia = useHistory();
    function Details(users){
        api.get(`https://api.github.com/users/${users}/repos`)
            .then(res =>{
                    
                this.setDetalhes(res.data)
                    console.log(res.data)
    
                    
            }
       )
    }
    
    function renderDetail(detalhes) {
        return(
            <div key ={detalhes.id} >
                    
                <label>nome do projeto: </label>{detalhes.name}
                <br></br>
                <label>Linguagem: </label>{detalhes.language}
    
            </div>
       )
    }
        return(
            
            <div>
                <div>
                    <h1>Carrinho de compras</h1>
                </div> 
               <div>
               <p> Nome:{props.nome}</p>
                    <p> Nick: {props.nickname}</p>
                    <p>Bio:{props.bio}</p>
                    <p>localização: {props.localização}</p>
                    <p> Valor:{props.valor},00/por horas</p>
               </div>
               <div>
                   <button>Detalhe</button>
               </div>
               <div>
                   <h1>Valor Total:</h1>
                   <p></p>
               </div>
               <div>
                    <button onClick ={()=>{
                        historia.push("/Compras")
                        }}>
                            Comprar
                        
                    </button>
               </div>

                
            </div>
        );
    
  

}

