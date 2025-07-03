import { useState } from "react"

const LiveInput = () => {
    const [count, setCount] = useState('')
  return (
    <>
        <input type="text" value={count} onChange={(e) => {setCount(e.target.value)}}/>

        <h3>You type: {count}</h3>
    </>
  )
}

export default LiveInput