import React from "react";
import s from "./analogClock.module.css"

type ClockViewPropsType = {
    date: Date
}

export const AnalogClock = (props: ClockViewPropsType) => {

    const secondsStyle = {
        transform: `rotate(${props.date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.date.getHours() * 30}deg)`
    };
    return<div className={s.clock}>
        <div className={s["analog-clock"]}>
            <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
            <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
            <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
        </div>
    </div>
}
