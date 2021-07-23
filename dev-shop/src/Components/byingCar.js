import React,{useState} from 'react'
import axios from 'axios';


function DetailsUsers(props) {
    const [users,setUsers] = useState('');
    const [details,setDetails] = useState({});
    const [detailsLoading,setDetailsLoading] = useState(false);

    function buy(e){
        e.preventDefault();
        buying();
    }
    function buying(){
        return(
            <div>
             
            </div>
            
        )
    }
    function getDetails(repoName) {
        
    }

    return(
        <div>
                
             carrinho
            
        </div>
    );

}

export default DetailsUsers;