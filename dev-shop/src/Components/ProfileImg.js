import React, { useEffect, useState } from 'react';
import axios from 'axios'


function ProfileImg(props) {
    const [imgProfile,setImgProfile] = useState([])
    
    
    function showImg(props){
        
    }

   
   
    return (
        <div>
            <h1>Image Profile</h1>
            <img src={props.img}>
            
            </img>
           
        </div>
    
    );
}

export default ProfileImg;