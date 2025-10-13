import { useState } from "react"

function InputField() {
    const [val, setval] = useState("");
    return (
        <div>
            <h1>Input Field in React JS</h1>

            <input
                type="text "
                value={val}
                onChange={(event) => setval(event.target.value)}
                placeholder="name" />

            <h1>{val}</h1>
            <button onClick={()=>setval("")}>Clear Value</button>
        </div>
    )
}
export default InputField
