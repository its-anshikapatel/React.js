
import Function from "./1.Function";
import ControlComponent from "./10.ControlledComponent";
import CheckBox from "./11.CheckBox";
import Radio from "./12.Radio&Dropdown";
import Loops from "./13.Loops";
import Clock from "./14.Clock";
import Hooks from "./15.Hooks";
import UseEffect from "./16.useEffect";
import HandleProps from "./17.HandleProps";
import LifeCycle from "./19.HumanLifeCycle&ReactLifeCycle";
import HumanLifeCycle from "./19.HumanLifeCycle&ReactLifeCycle";
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

      <Function/>

      {/* <Props name="anshika" a={age} /> */}
      {/* <Props user1={userObject} user2={secondObject} /> */}

      {/* <Array cnames={collegeName}/> */}

      {/* Default Props */}
      {/* If we dont pass any value  */}
      {/* <DefaultProps  name={"anshika"}/> */}

      {/* //Wrapper 
      <Wrapper>
        <h1>hii anshika</h1>
      </Wrapper> */}

      {/* //Input Field */}
      {/* <InputField /> */}

      {/* Controlled Component
      <ControlComponent/> */}

      {/* //checkbox */}
      {/* <CheckBox/> */}

      {/* //Radio & Dropdown */}
      {/* <Radio/> */}

      {/* <Loops/> */}
        {/* <Clock/> */}
{/* 
        <Hooks/> */}

        {/* <UseEffect/> */}

        {/* <HandleProps/> */}

        {/* <LifeCycle/> */}

       

    </div>
  )
}
export default App