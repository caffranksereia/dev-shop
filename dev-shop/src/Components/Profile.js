import React from 'react';
import BuyCar from '../Services/BuyCar';
import '../CSS/Profile.css'

export default class Profile extends React.Component
{
    constructor(props){
        super(props)

        
        
        this.addCar = this.addCar.bind(this)
        

    }
    
    
    
    addCar(){
       
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
        

        return(
             
            <div className = "containerPro">
                <div className = "text">
                    <div className = "texPerfil">
                        <div className = "">
                            <h1>Perfil</h1>
                        </div>
                    </div>
                </div>
                <div className = "Perfil">
                 <div >
                     <label>Nome:</label>
                     <p> {this.props.nome}</p>
                 </div>
                    <div>
                        <label>Nick:</label>
                        <p> {this.props.nickname}</p>
                    </div>
                    <div>
                        <label>Valor:
                        </label>
                        <p> Valor:{this.props.valor},00/por horas</p>
                    </div>
                   
                    
                 
                </div>
               
                <div className = "divButton">
                    <button onClick ={this.addCar}>
                        
                        Adicionar Carrinho
                    </button>
                </div>
               
                
                    
                
            </div>
        
          
        );    
    }
}