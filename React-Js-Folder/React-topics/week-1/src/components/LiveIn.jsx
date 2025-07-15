import React, { useState } from 'react'

const LiveIn = () => {
    const [value, setValue] = useState('');
  return (
    <>
        <input type="text" placeholder='Place your Name' value={value} onChange={(e) => setValue(e.target.value)}/>
        <h2>You typed: {value}</h2>
        <h4>character lenght: {value.length}</h4>
        <button onClick={() => {setValue('')}}>Reset</button>
    </>
  )
}

export default LiveIn;