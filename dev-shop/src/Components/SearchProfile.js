import React, {  useState } from 'react';
import axios from 'axios'

import  Profile  from './Profile';
import ProfileImg from './ProfileImg'
import DetailsUsers from './DetailsUsers';
import BuyingCar from './BuyingCar'




function SearchProfile (){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [repos,setRepos] = useState([]);
    const [details,setOpenDetails] = useState([])
    

    
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
    
    function moreDetails(e){
        e.preventDefault();
        Details();
        
   }
    function Details(){
        setLoading(true);
        axios.get(`https://api.github.com/users/${users}/repos`)
        .then(res =>{
            setLoading(false);
            setOpenDetails(res.data)
            console.log(res.data)
        })
    }
    function renderDetail(details) {
        return(
            <div key ={details.id} >
                
                <label>nome do projeto: </label>{details.name}
                <br></br>
                <label>Linguagem: </label>{details.language}

            </div>
        )
    }
    
    return (
    <div>
        <div className = "listuser">
            <p>{users}</p>
            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
            <button onClick = {submit}>{loading ? "Buscando...":"Buscar"}</button>
        </div>
        <div>
            <ProfileImg  
                img = {repos.avatar_url}
            ></ProfileImg>
            
            <Profile 
                nickname = {repos.login}
                nome = {repos.name}
                localização = {repos.location}
                Bio= {repos.bio}
                Valor= {repos.public_repos}
            ></Profile>
            
        </div>
        <div>
            <button onClick = {moreDetails}>{loading? "Carregando...":"detalhes"}</button>
            <div>
            <DetailsUsers detalhes ={details.map(renderDetail)} >
            </DetailsUsers>

            </div>
        </div>
        <div>
            <BuyingCar></BuyingCar>
        </div>
    
    </div>
    
    );
}

export default SearchProfile;