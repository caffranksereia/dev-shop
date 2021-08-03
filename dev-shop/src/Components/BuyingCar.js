import React from 'react';
import { useHistory } from 'react-router-dom';
import BuyCar from '../Services/BuyCar';
import '../CSS/BuyingCar.css'
import ListBying from './ListBuying';

export default class BuyingCar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data:[]
        }

    }
    componentDidMount(){
        BuyCar.buyCarAll().then(res =>{
            this.setState({data:res.data})
        })  
    }
    
    render(){
        const {data} = this.state
        return(
            <div>
                <div>
                    <h1>Carrinho de compras</h1>
                </div> 
                {data.map((buy) => 
                    <div key ={buy.id} >
                        <div className="renderdiv">
                            <div>
                                <label>Nome:</label>
                                {buy.name}
                            </div>
                            <div>
                                <label>valor: </label>
                                {buy.valor},
                            </div>
                            <div>
                                <label>Nickname:</label>
                                {buy.Username}
                            </div>
                            <div>
                                <label>Bio: </label>
                                {buy.Bio}
                            </div>
                            <div>
                                <label>Localização: </label>
                                {buy.localizacao}
                            </div>
                        </div>
                    </div>
                )}
                {console.log(data)}
                <div>
                    <button id="button">Comprar </button>
                </div>
            </div>
        );
    }
       
    
       
  

}
 
