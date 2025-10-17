import React, { useEffect } from 'react'

const Counter = ({ count }) => {

    const handleCounter = () => {
        console.log("handleCounter Called");
    }
    useEffect(() => {
        handleCounter();

    }, [count])
    return (
        <div>
            <h1>Counter Component {count}</h1>
        
        </div>
    )
}

export default Counter
