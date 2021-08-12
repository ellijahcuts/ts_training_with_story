import React, {useReducer} from "react";
import {reducer} from "./Reducer";

export type AccordionPropsType = {
    title: string

}



export function UnControlledAccordion(props: AccordionPropsType) {

    /*let [collapsed, setCollapsed] = useState(false)*/
    let [state, dispatch] = useReducer(reducer, {collapsed:false})

    return <div>
        <AccordionTitle title={props.title} onClick={() => {
            /*setCollapsed(!collapsed)*/
            dispatch({type: "TOOGLE-COLLAPSED"})
        }}/>
        {state.collapsed && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </div>
    )
}


function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
