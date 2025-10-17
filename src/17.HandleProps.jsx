import React, { useState } from 'react'
import Counter from './18.Counter'

const HandleProps = () => {
    const[count, setCount] = useState(0);
  return (
    <div>
        <h1>Handle Props Side Effects with useEffect in component</h1>
        <Counter count={count}/>
        <button onClick={()=>setCount(count+1)}>Increase Counter {count}</button>
      
    </div>
  )
}

export default HandleProps
