import React,{useState,useEffect} from 'react';
import api from '../Services/api';
import Profile from './Profile';
import ProfileImg from './ProfileImg';
import BuyingCar from './BuyingCar';
import Comprado from './Comprado';



export default function SearchProfile (){
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [repos,setRepos] = useState([]);
    const [details,setOpenDetails] = useState([]);
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
    
    
   
    function Details(){
        setLoading(true)
        api.get(`https://api.github.com/users/${users}/repos`)
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
        
           <div  key ={details.id}>
               {
                   profileRende ? 
                   <ProfileImg avatar ={repos.avatar_url} alt ={repos.login}/>
              :'' }
           {profileRende ? 
               
                <Profile 
                    
                    nickname = {repos.login}
                    nome = {repos.name}
                    localização = {repos.location}
                    Bio= {repos.bio}
                    valor= {repos.public_repos}
                    
                ><button>detalhes</button></Profile>
            : ''  }
            
            </div>   
        </div>
        <div>
            <BuyingCar
                avatar = {repos.avatar_url}
                nome ={repos.name}
                nickname={repos.login}
                localização={repos.location}
                bio = {repos.bio}
                valor={repos.public_repos}
                detalhes ={details.map(renderDetail)}
                
                
            
        
            />
        </div>
    
    </div>
    
    );
}

