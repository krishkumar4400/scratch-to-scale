import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <h2>Count {count}</h2>
            <div>
                <button onClick={() => {
                    setCount(count + 1);
                }}>Click</button>
            </div>
        </div>
    )
}

export default Counter
