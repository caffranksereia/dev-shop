import React from 'react';
import '../CSS/ProfileImg.css'


function ProfileImg(props) {
    
    return (
        <div className = "container">
            <div className = "raw">
                <div className = "Card">
                    <div className = "cardImg">
                        <img src={props.avatar} alt ={props.login}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileImg;