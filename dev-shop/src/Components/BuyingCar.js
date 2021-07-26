import React from 'react';
import axios from 'axios';
import Comprado from './Comprado';

class BuyingCar extends React.Component{

    render(){
        return(
            <div>
                <form>
                    <label>Desenvolvedor:</label>
                    <p>{this.props.name}</p>
                    <label>Usuario:</label>
                    <p>{this.props.nickname}</p>
                    <label>Bio:</label>
                    <p>{this.props.Bio}</p>
                    <label>Valor:</label>
                    <p>R${this.props.Valor},00/Por horas</p>
                    
                
                
                
                </form>   
                <div>
                    <button>Pagar</button>
                </div>
                
            </div>
        );
    }

  

}

export default BuyingCar;