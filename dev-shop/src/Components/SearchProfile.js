import React,{useState} from 'react';
import api from '../Services/api';
import Profile from './Profile';
import ProfileImg from './ProfileImg';

export default function SearchProfile (){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [repos,setRepos] = useState([]);
    const[profileRende,setProfileRende] = useState(false);
  

   
    function submit(e){
        e.preventDefault();
        searchUsers();
        
    }
    function searchUsers(){
        setProfileRende(true)
        setLoading(true);
        api.get(`https://api.github.com/users/${users}`)
        .then(res => {
            setLoading(false);
            setRepos(res.data)
            
            console.log(res.data)
        })
        
    }   
 
    return (
    <div>
        <div className = "listuser">
            
            <p>{users}</p>
            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
            <button onClick = {submit}>{loading ? "Buscando...":"Buscar"}</button>
        </div>
        <div>
        
           <div>
               {
                   profileRende ? 
                   <ProfileImg avatar ={repos.avatar_url} alt ={repos.login}/>
              :'' }
           {profileRende ? 
               
                <Profile 
                    
                    nickname = {repos.login}
                    nome = {repos.name}
                    localizacao = {repos.location}
                    Bio= {repos.bio}
                    valor= {repos.public_repos}
                    
                   
                    
                ></Profile>
            : ''  }
            
            </div>   
            
        </div>
           
    </div>
    
    );
}

