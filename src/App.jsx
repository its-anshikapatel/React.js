
import Props from "./5.Props"
import Array from "./6.Array";
import DefaultProps from "./7.DefaultProps";
import Wrapper from "./8.Wrapper";
import InputField from "./9.Input";

function App() {
  // let age=12;

  //Object
  // let userObject={
  //   name:"Anshika",
  //   age: "21",
  // }
  // let secondObject={
  //   name:"ashi",
  //   age: "20"
  // }

  //Array
  // let collegeName = ['nit', ' psit', ' iit', ' mit', ' du'];
  // console.log(collegeName);

  return (
    <div>
      
      {/* <Props name="anshika" a={age} /> */}
      {/* <Props user1={userObject} user2={secondObject} /> */}

      {/* <Array cnames={collegeName}/> */}

      {/* Default Props */}
      {/* If we dont pass any value  */}
      {/* <DefaultProps  name={"anshika"}/>
 */}

      {/* //Wrapper 
      <Wrapper>
        <h1>hii anshika</h1>
      </Wrapper> */}

      {/* //Input Field */}
      <InputField />


    </div>
  )
}
export default App