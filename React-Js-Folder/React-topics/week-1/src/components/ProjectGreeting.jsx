import React, { useState } from 'react'

const Greeting = (props) => {
    return <h2>hello, {props.name}</h2>
}

const ProjectGreeting = () => {
    const [show, setShow] = useState(false)
  return (
    <>
        <button onClick={() => {
            setShow(!show)
        }}>Show Greeting</button>

        {show && <Greeting name="Nasir"/>}

        
    </>
  )
}

export default ProjectGreeting;