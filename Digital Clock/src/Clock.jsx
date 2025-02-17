import React, { useEffect, useState } from "react";

function Clock() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        
        document.title = "Digital Clock"
        
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const meridiam = hours > 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12;

        function padZero(number){
            return number < 10 ? '0'+ number : number
            /* OR (can use both single as well as double quotes)

            return (number < 10 ? "0" : "") + number
            */
        }

        return  `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiam}`
    }

    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    )
}

export default Clock;