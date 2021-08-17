import React, {useEffect, useState} from "react";

export default {
    title: 'ts_learning/UseEffect demo',
}

export const SetTimeOutEx = () => {
    const [counter, setCounter] = useState(1)

    useEffect(() => {
       const intervalID = setInterval(() => {
            console.log("tick: " +counter)
            setCounter(state=>state+1)
        },1000)
        return ()=>{
            clearInterval(intervalID)
        }
    },[])

    return <>
        Hello mother fucker, Counter:{counter}

    </>
}
