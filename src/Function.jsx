
const  continu=(name)=>{
        alert(name);
    }

function Function(){

    // const  continu=(name)=>{
    //     alert(name);
    // }
    function cancel(){
        alert("cancel it");
    }
    return(
        <div>
            
            <h1>Events</h1>
            {/* method 1  */}
            <button onClick={()=>continu("anshika")}>continue</button>
            <br />
            {/* //method 2 */}
            <button onClick={cancel}>cancel</button>

        </div>
    )
}
export default Function;