import React from "react";


export const get2digitsString = (n: number) => n < 10 ? "0" + n : n
type ClockViewPropsType = {
    date: Date
}
export const DigitalClock = (props: ClockViewPropsType) => {
    return <div>
        <span>{get2digitsString(props.date.getHours())}</span>
        :
        <span>{get2digitsString(props.date.getMinutes())}</span>
        :
        <span>{get2digitsString(props.date.getSeconds())}</span>
    </div>
}
