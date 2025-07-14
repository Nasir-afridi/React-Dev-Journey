import React, { useEffect, useState } from 'react'

const FetchConsole = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    } , [])
  return (
   <>
   <h2>Fetching data...</h2>
   <ul>
    
        {users.map((user) => ( 
            <li key={user.id}>
                {user.name} : {user.email}
            </li>))
           
        }
    
   </ul>
   </>
  )
}

export default FetchConsole;