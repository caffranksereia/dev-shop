import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BuyCar from '../Services/BuyCar'

export default function BuyingCar (){
    const [postBuy,setPostBy] = useState([])
    const historia= useHistory()

    useEffect(()=>{
        BuyCar.buyCarAll().then(res =>{
            console.log(res.data)
            setPostBy(res.data)
        })
    },[])

    function renderDetail(postBuy) {
        return(
            <div key ={postBuy.id} >

                <label>Nome: </label>{postBuy.name}
                <br></br>
                <label>valor: </label>{postBuy.valor}
                <br></br>
                <label>Nickname:</label>{postBuy.Username}
                <br></br>
                <label>Bio: </label>{postBuy.Bio}
                <br></br>
                <label>Detalhes: </label>{postBuy.name}
                <br></br>
                <label>Localização: </label>{postBuy.localizacao}
                <br></br>
                
                
                
                
               

            </div>
        )
    }
        

        return(
            
            <div>
                <div>
                    <h1>Carrinho de compras</h1>
                </div> 
               <div>
                    {postBuy.map(renderDetail)}
               </div>
            <div>
                <button onClick={
                    ()=>{
                        historia.push("/Compras")
                    }
                }>Comprar </button>
            </div>

                
            </div>
        );
    
       
    
       
  

}

