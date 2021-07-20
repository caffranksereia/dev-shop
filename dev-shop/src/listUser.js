import React, { useState } from 'react';
import axios from 'axios'

function ListUser(props) {
    const [users,setUsers] = useState('')
    function searchUsers(){
        axios.get(`https://api.github.com/users/${users}/repos`).then(response => console.log(response.data))
    }
    return (
        <div className = "listuser">
            <p>{users}</p>
            <input type="text" placeholder= "users" value= {users} onChange = {e => setUsers(e.target.value)}/>
            <button onClick = {searchUsers}>Pesquisar</button>
        </div>
    );
}

export default ListUser;