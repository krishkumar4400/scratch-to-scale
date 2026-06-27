"use client"

import { useEffect, useState } from "react"

const page = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    async function fetchData() {
        const res = await fetch('https://api.github.com/users/krishkumar4400');
        const data1 = await res.json();
        setData(data1);
    }

    console.log("client console");
    useEffect(() => {
        fetchData();
    }, [])
    const origin = window.location.origin;
    return (
        <div>
            client page
            <hr />
            <button onClick={() => alert("Hello World")}>Click Here</button>
            <hr />
            <h1>
                {
                    count
                }
            </h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <div>
                <p>
                    {
                        JSON.stringify(data)
                    }
                </p>
            </div>

            <br /><br /><br /><br /><br />
            <h1>
                {
                    origin
                }
            </h1>
        </div>
    )
}

export default page
