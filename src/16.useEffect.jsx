import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [counter, setCounter]= useState(0);

    

    function print(){
        console.log(counter);
    }
    useEffect(()=>{
      print();
    }, )

  return (  
    <div>
        <h1>useEffect Hook in React Js</h1>

        {/* Syntax
        useEffect(()=>{
            //write your code
        },[State or props])
       */}
       <button onClick={()=>setCounter(counter+1)}>Print {counter}</button>

    </div>
  )
}

export default UseEffect
