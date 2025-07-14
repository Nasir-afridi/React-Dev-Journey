import React, { useEffect } from 'react'

const FetchConsole = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => console.log(data))
    } , [])
  return (
   <>
   <h2>Fetching data...</h2>
   </>
  )
}

export default FetchConsole;