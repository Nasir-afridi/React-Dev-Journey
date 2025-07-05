import { useState } from "react"

const Project = () => {
    const [count, setCount] = useState(0);
    const [show, Setshow] = useState(0);


  return (
    <>
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> {setCount(count + 1)}}>+1</button>
        <button onClick={()=> {setCount(count + 2)}}>+2</button>
         <button onClick={()=> {setCount(count - 1)}}>-1</button>
        <button onClick={()=> {setCount(count - 2)}}>-2</button>
        <button onClick={()=> {setCount(0)}}>Reset</button>
    </div>
    </>
  )
}

export default Project;