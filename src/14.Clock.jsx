import { useEffect, useState } from "react";

const Clock=()=>{
    const [time, setTime] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleDateString());
        }, 1000);
    }, [])
    return(
        <div>
            <h1>Clock</h1>
            <h1>{time}</h1>
        </div>
    )
}
export default Clock;