import { useState } from "react";

function State() {

    const [name, setName] = useState("anshika")
    const [count, setCount] = useState(0)
    const [minus, setMinus] = useState(10)
    const handleName = () => {
        setName("saloni")
    }
    function counter() {
        setCount(count + 1);

    }

    return (
        <div>
            State
            <h1>{name}</h1>
            <button onClick={handleName}>Change my name</button>
            <br />
            {/* 1st method */}
            <button onClick={counter}>Login Times: {count}</button>
            <br />

            {/* 2nd Method */}
            <button onClick={()=> setMinus(minus-1)}>minus values: {minus}</button>
            <h2>{minus}</h2>

        </div>
    )
}

export default State