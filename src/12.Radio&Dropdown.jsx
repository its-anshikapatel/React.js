import { useState } from "react"

function Radio(){
    // State
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');

    return(
        <div>
            <h1>Radio and Dropdown in React Js</h1>
            <input type="radio" name="gender" id="male" value={"male"} onChange={(event)=>setGender(event.target.value)}  />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value={"female"} onChange={(event)=>setGender(event.target.value)}  />
            <label htmlFor="female">Female</label>

            <h2>Selected Gender:{gender}</h2>

            <br /><br />

            {/* Dropdown */}

            <h3>Select City:</h3>
            <select name="" id=""  onChange={(event)=> setCity(event.target.value)} defaultValue={"delhi"}>
                <option value="noida">Noida</option>
                <option value="delhi">Delhi</option>
                <option value="kanpur">Kanpur</option>
                <option value="lucknow">Lucknow</option>
                <option value="fatehpur">Fatehpur</option>

            </select>
            <h2>Selected City: {city}</h2>
        </div>
    )
}
export default Radio