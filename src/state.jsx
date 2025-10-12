import { useState } from "react";

function State(){

    const [name, setName] = useState("anshika")
    const handleName = ()=>{
        setName("saloni")
    }

    return(
        <div>
            State
            <h1>{name}</h1>
            <button onClick={handleName}>Change my name</button>
        </div>
    )
}

export default State