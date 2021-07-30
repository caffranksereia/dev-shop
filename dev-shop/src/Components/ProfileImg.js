import React from 'react';


function ProfileImg(props) {
    
    return (
        <div>
            <img src={props.avatar} alt ={props.login}
            >
            
            </img>
           
        </div>
    
    );
}

export default ProfileImg;