import React from 'react'
import axios from 'axios';

function alluser({details,loading}) {
    if(loading){
        return(
            <h1 className="loader">loading..</h1>
        )
    }
    return(
        <div>
            <h1>User</h1>
            <div>
               <label className="label">Name:</label>
               <span className="value">{details.name}</span>

            </div>
            <div>
                <label className="label">Valor de compra</label>
                <span className="value">R${details.commits_url}</span>
            </div>
            <div>
               <label className="label">all language:</label>
               <span className="value">{details.language}</span>

            </div>
             
            <button>Comprar</button>
        </div>
    );

}

export default alluser;