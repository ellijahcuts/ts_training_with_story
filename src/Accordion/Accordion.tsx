import React from "react";

export type ItemType={
    title: string
    value: any
}
export type AccordionPropsType = {
    collapsed: boolean
    titleValue: string
    onClick: () => void
    items:ItemType[]
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (<div>
            <h3 onClick={props.onClick}>{props.title}</h3>
        </div>
    )
}
export type AccordionBodyPropsType = {
    items:ItemType[]
    onClick: (value:any)=>void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((i, index)=> <li onClick={()=>{props.onClick(i.value)}} key={index}>{props.items}</li>)}
        </ul>
    )
}
