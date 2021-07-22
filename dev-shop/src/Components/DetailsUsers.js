import React,{useState} from 'react'
import axios from 'axios';
import Comprado from './Comprado';

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
                <Comprado></Comprado>
            </div>
            
        )
    }
    function getDetails(repoName) {
        
    }

    return(
        <div>
            
             
            
        </div>
    );

}

export default DetailsUsers;