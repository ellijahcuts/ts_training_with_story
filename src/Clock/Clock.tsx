import React, {useEffect, useState} from 'react';

type PropsType = {}


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

    const get2digitsString = (n: number) => n < 10 ? "0" + n : n


    return <div>
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
        <hr/>
        <div></div>
    </div>
}
