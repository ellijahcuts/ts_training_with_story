import {Story} from "@storybook/react";
import React, {useState} from "react";
import {OnOff,PropsType} from "./OnOff";
import {action} from "@storybook/addon-actions";

const callbackClick = action("accordion mode change event fired")
export default {
    title: 'ts_learning/OnOffComponent',
    component: OnOff,
    args:{
        onClick:callbackClick,
    }

}

const Template: Story<PropsType> = (args) => <OnOff {...args}/>;

export const OnMode = Template.bind({});
OnMode.args={
    on: true
}
export const OffMode = Template.bind({});
OffMode.args={
    on: false
}


