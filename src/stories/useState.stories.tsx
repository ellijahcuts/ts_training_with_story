import React, {useState} from "react";

export default {
    title: 'ts_learning/UseState demo',
}

function genData(){
    return 99999999
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(genData)


    return <>
        <button onClick={() => setCounter(state=>state+1)}>+</button>
        {counter}
    </>

}
