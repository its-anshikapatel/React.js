import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [counter, setCounter] = useState(0);



  function print() {
    console.log(counter);
  }
  useEffect(() => {
    print();
  },)

  return (
    <div>
      <h1>useEffect Hook in React Js</h1>

      {/* Syntax
        useEffect(()=>{
            //write your code
        },[State or props])
       */}
      <button onClick={() => setCounter(counter + 1)}>Print {counter}</button>

      <div>
        <h1>Use Effect</h1>

        {/*
          useEffect(())=>{
          //call every time
          }

          useEffect(() => {
            //call only once
            //this code will run on update
          }, [])

          useEffect(()=> {
            //call on changing single state
          }, [state1])

          useEffect(()=> {
            //call on changing both state
          }, [state1, state2])

          useEffect(()=> {
            //call on changing props
          }, [prop1, prop2]) 

          useEffect(()=> {
            //this code will run on update
          }, [state1, props])

          useEffect(()=>{
            return ()=>{
              //This code will run on unmount
              }, 
              },[]);

          useEffect(()=>{
            //This code will run on every life cycle event
            
          })

          
        */}
      </div>

    </div>
  )
}

export default UseEffect
