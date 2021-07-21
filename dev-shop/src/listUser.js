import React, { useState } from 'react';
import Alluser from './Alluser';
import axios from 'axios'

function ListUser(props) {
    const [users,setUsers] = useState('');
    const [loading,setLoading] = useState(false);
    const [repos,setRepos] = useState([]);
    const [details,setDetails] = useState({});
    const [detailsLoading,setDetailsLoading] = useState(false);
    const [openDetails,setOpenDetails] = useState([]);


    function submit(e){
        e.preventDefault();
        searchUsers();
    }
    function searchUsers(){
        setLoading(true);
        axios.get(`https://api.github.com/users/${users}`)
        .then(res => {
            setLoading(false);
            setRepos(res.data)
            console.log(res.data)
        })
    }
    function moreDetails() {
        axios.get(`https://api.github.com/users/${users}/repos`)
        .then(res =>{
            setOpenDetails(res.data)
            console.log(res.data)
        })
    }
    function renderRepo(repo){
        return(
            <div className="row"onClick={()=>getDetails(repo.name)} key={repo.id}>
                <div>{repo.name}</div>
            </div>
            
        )
    }
    function getDetails(repoName) {
        getDetails(true)
        axios.get(`https://api.github.com/users/${users}/${repoName}`)
        .then(res =>{
            setDetailsLoading(false);
            setDetails(res.data)
        })
    }
    
    return (
        <div className = "listuser">
            <p>{users}</p>
            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
            <button onClick = {submit}>{loading ? "Buscando...":"Buscar"}</button>
            <div>
                <h1>User</h1>
                <div>
                    <div>
                        <label className="label">Name:</label>
                        <span className="value">{repos.login}</span>
                    </div>
                    <button onClick= {moreDetails}>Detalhes</button>
                </div>
            </div>
        </div>
    
    );
}

export default ListUser;