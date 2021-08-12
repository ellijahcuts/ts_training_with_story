import {Story} from "@storybook/react";
import React, {useState} from "react";
import {UnControlledOnOff,PropsType} from "./UnControlledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'ts_learning/UnControlledOnOffComponent',
    component: UnControlledOnOff,
}

const callback = action("on or off clicked")

const Template: Story<PropsType> = (args) => <UnControlledOnOff {...args}/>;

export const OnMode = Template.bind({});
export const OffMode = Template.bind({});
OnMode.args={
    onChange:(callback)
}
OffMode.args={
    onChange:(callback)
}

/*
export const ModeCollapsed=()=>{
    return <UnControlledAccordion title={"Users"}/>
}
*/

