import React,{useState} from 'react';
import api from '../Services/api';
import Profile from './Profile';
import ProfileImg from './ProfileImg';
import '../CSS/SearchProfile.css'

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
            <div>
                <div>
                    <div className= "Text">
                        <h1>Dev Shop</h1>
                    </div>
                    <div>
                        <h2>Voce encontra o seu NERD de programção aqui no Dev Shop</h2>
                    </div>
                    <div>
                        <div className = "InputText">
                            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
                        </div>
                        <div>
                            <button onClick = {submit}>{loading ? "Buscando...":"Buscar"}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div>
                    {
                        profileRende ? 
                        <ProfileImg avatar ={repos.avatar_url} alt ={repos.login}/>
                    :'' }
                </div>
                <div>
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
        
    </div>
    
    );
}

