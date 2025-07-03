import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count + 2)}>+2</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    );
};

export default Counter;
