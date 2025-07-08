import React, { useEffect, useState } from 'react'

const FetchUsers = () => {
    const [user, setUser]  = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUser(data)) 
    }, [])
    console.log(user)
  return (
   <>
        <ul>
        {
            user.map(function(users) {
            <li key={user.id}>{user.name}</li>
            })
        }
        </ul>
    </>
  )
}

export default FetchUsers