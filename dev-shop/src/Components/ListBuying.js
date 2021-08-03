import React from 'react'


export default function ListBying(id,name,valor,Username,Bio,localizacao){
    return( 
    <div key ={id} >
            <div className="renderdiv">
                <div>
                    <label>Nome:</label>
                    {name}
                </div>
                <div>
                    <label>valor: </label>
                    {valor}
                </div>
                <div>
                    <label>Nickname:</label>
                    {Username}
                </div>
                <div>
                    <label>Bio: </label>
                    {Bio}
                </div>
                <div>
                    <label>Detalhes: </label>
                    {name}
                </div>
                <div>
                    <label>Localização: </label>
                    {localizacao}
                </div>
            </div>
        </div>
    );
}