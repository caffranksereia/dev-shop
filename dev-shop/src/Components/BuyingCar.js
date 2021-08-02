import React from 'react';
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

