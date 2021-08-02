import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import BuyCar from '../Services/BuyCar';
import '../CSS/BuyingCar.css'

export default function BuyingCar (){
    const [postBuy,setPostBy] = useState([])
    const historia= useHistory()

    useEffect(()=>{
        BuyCar.buyCarAll().then(res =>{
            setPostBy(res.data)
        })
    },[])

    function renderDetail(postBuy) {
        return(
            <div key ={postBuy.id} >
                <div className="renderdiv">
                    <div>
                        <label>Nome:</label>
                        {postBuy.name}
                    </div>
                    <div>
                        <label>valor: </label>
                        {postBuy.valor}
                    </div>
                    <div>
                        <label>Nickname:</label>
                        {postBuy.Username}
                    </div>
                    <div>
                        <label>Bio: </label>
                        {postBuy.Bio}
                    </div>
                    <div>
                        <label>Detalhes: </label>
                        {postBuy.name}
                    </div>
                    <div>
                        <label>Localização: </label>
                        {postBuy.localizacao}
                    </div>
                </div>
            </div>
        )
    }
        

        return(
            
            <div>
                <div>
                    <h1>Carrinho de compras</h1>
                </div> 
               <div className="divPost">
                    {postBuy.map(renderDetail)}
               </div>
                 <div className="buttonCar">
                    <button id="button" onClick={
                        ()=>{
                            historia.push("/Compras")
                        }
                    }>Comprar </button>
                </div>
            </div>
        );
    
       
    
       
  

}

