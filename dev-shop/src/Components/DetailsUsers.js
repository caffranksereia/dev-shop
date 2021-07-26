import React from 'react';


function DetailsUsers(props) {
    

    return(
        <div>
            <div>
                <h1>Detalhes do usuarios</h1>
            </div>
            <p>detalhes:{props.detalhes}</p>
        </div>
    );

}

export default DetailsUsers;