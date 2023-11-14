import { useEffect, useState } from "react"

export default function Test() {
    const [count, setCount] = useState("0")
    useEffect(() => {
   
    },[count])
    return(
        <>
            <p>{count}</p>
            <button style={{border: "1px solid black"}} onClick={() => {
                setCount((count) => {
                    console.log(count);
                    return count + 1
                })
            }}>Increase</button>
        </>
    )
}