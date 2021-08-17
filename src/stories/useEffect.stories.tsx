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
export const ResetEffectEx = () => {
    const [counter, setCounter] = useState(1)
    console.log("Rendered")

    useEffect(() => {
        console.log("Effect on " + counter)

        return ()=>{
            console.log("Reset Effect")
        }
    },[counter])

    const inc = () => {setCounter(counter+1)}

    return <>
        Hello mother fucker, Counter:{counter}
        <button onClick={inc}>+++</button>
    </>
}
export const KeyTrackerEx = () => {
    const [text, setText] = useState('')
    console.log("Rendered "+ text)

    useEffect(() => {
        const handler = (e: KeyboardEvent)=>{
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress',handler)
        return()=>{
            window.removeEventListener('keypress',handler)
        }
    },[text])


    return <>
        Typed text: {text}
    </>
}

export const TimeoutEx = () => {
    const [text, setText] = useState('')
    console.log("Rendered "+ text)

    useEffect(() => {
        const timeoutID = setTimeout(()=>{
            console.log('ppc')
            setText('3sec proshlo')
        },3000)
        return () =>{
clearTimeout(timeoutID)
        }
    },[text])


    return <>
        Typed text: {text}
    </>
}
