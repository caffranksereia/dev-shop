import React from 'react';


function DetailsUsers(props) {
    

   

    return(
        <div>
            <h1>Profile</h1>
            <p>nickname: {props.login}</p> 
           <p>nome: {props.name}</p>
           <p>localização: {props.location}</p>
            <p>Bio: {props.bio}</p>
            <p>Valor:{props.public_repos}</p>
            
        </div>
    );

}

export default DetailsUsers;