import React, {useEffect, useState} from 'react';
import {AnalogClock} from './analogClock';
import {DigitalClock} from "./digitalClock";

type PropsType = {
    mode?: "analog" | "digital"
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    })


    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClock date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClock date={date}/>
    }

    return <div>
        {view}
    </div>
}
