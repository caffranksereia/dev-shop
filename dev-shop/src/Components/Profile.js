import axios from 'axios';
import React from 'react';
import DetailsUsers from './DetailsUsers';


class Profile extends React.Component
{
  
    
    
    constructor(props){
        super(props);
        this.state = {showComponents:true}
        this.infoComponets =this.infoComponets.bind(this)
        this.loading = false;
        this.setLoading = false
    }
    

    infoComponets(){
        this.setState(state =>({
            showComponents: !state.showComponents
        }))
    }

  
    render(){
        return(
            <div>

                <p>nickname: {this.props.nickname}</p> 
                <p>nome: {this.props.nome}</p>
                <p>localização: {this.props.localização}</p>
                <p>Bio: {this.props.Bio}</p>
                <p>Valor: {this.props.Valor}</p>
                <div>
               
                <div>
                <DetailsUsers detalhes ={this.props.detalhes} 
                />

            </div>
        </div>
            </div>
        );    
    }
}

export default Profile;