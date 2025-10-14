import { useState } from "react";

function CheckBox() {
    const [skills, setSkills] = useState([]);

    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            //  ...spread operator
            setSkills([...skills, event.target.value])

        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return (
        <div>
            <h1>CheckBoxes In React JS</h1>
            <h2>Select your skills</h2>
            <input onChange={handleSkills} type="checkbox" id="Python" value="python " />
            <label htmlFor="Python">Python</label>
            <br />
            <hr />

            <input onChange={handleSkills} type="checkbox" id="C++" value="C++ " />
            <label htmlFor="C++">C++</label>
            <br />
            <hr />
            <input onChange={handleSkills} type="checkbox" id="Java" value="java " />
            <label htmlFor="Java">Java</label>
            <br />
            <hr />
            <input onChange={handleSkills} type="checkbox" id="PHP" value="php "/>
            <label htmlFor="PHP">PHP</label>
            <br />
            <hr />
            <h2>{skills} <br /></h2>
        </div>
    )
}
export default CheckBox;