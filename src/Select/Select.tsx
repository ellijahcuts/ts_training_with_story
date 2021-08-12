/*
import {useEffect, useState} from "react";


type SelectPropsType ={
    value?:any
    onChange:(value:any)=>void
    items: ItemType[]
}
export function Select(props:SelectPropsType){
    const [active,setActive] = useState(false)
    const [hoveredElementValue,setHoveredElementValue]=useState(props.value)

    const selectedItem = props.items.find(i=>i.value === props.value)
    const hoveredItem= props.items.find(i=>i.value === hoveredElementValue)

    useEffect(()=>{
        setHoveredElementValue(props.value)
    },[props.value])

    const toogleItems = ()=> setActive(!active)
    const onItemClick = (value:any)=>{props.onChange(value)
    toogleItems()
    }

    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown'|| e.key === 'ArrowUp'){
            for (let i=0: i< props.items.length;i++){
                if(props.items[i].value===hoveredElementValue){
                    const  pretendentElement = e.key === 'ArrowDown'
                    ?props.items
                }
            }
        }
    }



}
*/
