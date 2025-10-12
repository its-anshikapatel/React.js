import { useState } from "react"


function Toggle() {

    const [display, setDisplay] = useState(true);
    return (
        <div>
            <h1>Toggle in React Js</h1>
            {
                display ? <h1>Anshika Patel</h1> :  <h1>"user not found" </h1>

            }
            <br />
            <button onClick={()=> setDisplay(!display)}>Toggle</button>

        </div>
    )
}
export default Toggle