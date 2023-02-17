import React, { useEffect, useState } from "react"

const Clock = () => {
    const [time, setTime] = useState("")
    
    function madeClock () {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        
        setTime(`${hours}:${minutes}:${seconds}`)
    }

    useEffect(()=>{
        setInterval(madeClock, 1000)
    },[time])

    return (
        <div>{time}</div>
    )
}

export default Clock