import { useState } from "react"

function MultipleCondition(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Multiple Conditions in React Js</h1>
            <h2>{count}</h2>
            <button onClick={()=> setCount(count+1)}>Counter</button>

            {
                count==0 ? <h1>Count is {count}</h1>
                :count == 1? <h1>Count is {count}</h1>
                :null
            }



        </div>
    )
}

export default MultipleCondition