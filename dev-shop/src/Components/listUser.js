import React, { useState } from 'react';
import DetailsUsers from './DetailsUsers';
import Comprado from'./Comprado'
import axios from 'axios'


function ListUser(props) {
    const [users,setUsers] = useState('');
    const [loading,setLoading] = useState(false);
    const [repos,setRepos] = useState([]);
    const [openDetails,setOpenDetails] = useState([]);
    const [comprando,setComprando] = useState([])


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
    
    function renderDetail(openDetails) {
        return(
            <div key ={openDetails.id} >
                
                <label>nome do projeto: </label>{openDetails.name}
                <br></br>
                <label>Linguagem: </label>{openDetails.language}

            </div>
        )
    }
    
    return (
        <div className = "listuser">
            <p>{users}</p>
            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
            <button onClick = {submit}>{loading ? "Buscando...":"Buscar"}</button>


            <div>
                <button>
                    carrinho
                </button>
                
            </div>
            
        <div class="txt" >
            <h1>Lista Todo</h1>
        </div>
        <div>
            <ul v-for="todo of todos" key={repos.id}>
                <div>
                    <div>
                        <h3>Nick Name</h3>
                        {repos.login}
                    </div>
                    <div>
                        <h3>Nome:</h3>
                        {repos.name}
                    </div>
                    <div>
                        <h3>Trabalha por horas </h3>
                        R${repos.public_repos},00 /por horas
                    </div>
                    
                </div>
                <div>
                    <button onClick = {moreDetails}>{loading? "Carregando...":"detalhes"}</button>
                </div>
                <div>
                    <button>Adicionar</button>
                </div>
            </ul>
            <div>
                {openDetails.map(renderDetail)}
            </div>
        </div>
                
            
           
    </div>
    
    );
}

export default ListUser;