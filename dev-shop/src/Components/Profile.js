import React from 'react';


function DetailsUsers(props) {
    

   

    return(
        <div>
            <h1>Profile</h1>
            <p>nickname: {props.nickname}</p> 
           <p>nome: {props.nome}</p>
           <p>localização: {props.localização}</p>
            <p>Bio: {props.Bio}</p>
            <p>Valor: {props.Valor}</p>
            
            
        </div>
    );

}

export default DetailsUsers;