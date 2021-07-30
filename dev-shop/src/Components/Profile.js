import React from 'react';
import { useHistory } from 'react-router-dom';
import BuyingCar from './BuyingCar'
;
export default class Profile extends React.Component
{
    constructor(props){
        super(props)

        this.hangleChange = this.hangleChange.bind(this)
        
        this.addCar = this.addCar.bind(this)
        this.state = {
            img:'',
            Bio:'',
            nome :'',
            nickname: '',
            Valor: '',
            
        }

    }
    componentDidUpdate(){

    }
    pageBuying(){
        useHistory.push('/Buying')
    }
    hangleChange(e){
        console.log('this is cupom')
    }
    
    addCar(e){
         console.log('this is addCar')
    }
    render(props){
        

        return(
             
            <div>
                <div>
                    <h1>Perfil</h1>
                </div>
                
                <div>
                 
                    <p> Nome:{this.props.nome}</p>
                    <p> Nick: {this.props.nickname}</p>
                    <p>Bio:{this.props.Bio}</p>
                    <p>localização: {this.props.localização}</p>
                    <p> Valor:{this.props.valor},00/por horas</p>
               
                 
                </div>
                <button onClick={this.hangleChange}>Desconto</button>
                
                <button onClick ={this.addCar}>
                    
                    Adicionar Carrinho
                </button>
            </div>
        
          
        );    
    }
}