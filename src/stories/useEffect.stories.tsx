import React, {useEffect, useState} from "react";

export default {
    title: 'ts_learning/UseEffect demo',
}

export const SetTimeOutEx = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        setInterval(() => {
            console.log("tick: " +counter)
            setCounter((state)=>state+1)
        },1000 )
    }, [])

    return <>
        Hello mother fucker, Counter:{counter} ---- fake:{fake}

    </>
}
