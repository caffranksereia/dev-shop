import React from 'react';
import { useHistory } from 'react-router-dom';
import BuyCar from '../Services/BuyCar';
import BuyingCar from './BuyingCar';
import '../CSS/Profile.css'

export default class Profile extends React.Component
{
    constructor(props){
        super(props)

        
        
        this.addCar = this.addCar.bind(this)
        this.state = {
            RenderBuy:false
            
        }

    }
    componentDidUpdate(){
        this.setState.RenderBuy =! this.setState.RenderBuy
    }
    pageBuying(){
        useHistory.push('/Buying')
    }
    
    
    addCar(){
        this.setState.RenderBuy =!this.state.RenderBuy;
        const data ={
            name: this.props.nome,
            nickname:this.props.nickname,
            valor:this.props.valor,
            Bio:this.props.Bio,
            localizacao:this.props.localizacao

        }
        BuyCar.buyCarPost(data)
    }
    render(props){
        const RenderBuy= true

        return(
             
            <div className = "container">
                <div className = "text">
                    <div className = "texPerfil">
                        <div className = "Perfil">
                            <h1>Perfil</h1>
                        </div>
                    </div>
                </div>
                <div>
                 
                    <p> Nome:{this.props.nome}</p>
                    <p> Nick: {this.props.nickname}</p>
                    <p> Valor:{this.props.valor},00/por horas</p>
                    
                 
                </div>
               
                
                <button onClick ={this.addCar}>
                    
                    Adicionar Carrinho
                </button>
                {RenderBuy ?
                    <div>
                        <BuyingCar/>
                    </div>
                :''}
            </div>
        
          
        );    
    }
}