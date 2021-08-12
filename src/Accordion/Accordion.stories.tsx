import {Story} from "@storybook/react";
import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";

const callbackClick = action("accordion mode change event fired")

export default {
    title: 'ts_learning/AccordionComponent',
    component: Accordion,
    args: {
        onClick: callbackClick,
    }
}


const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const CollapsedMode = Template.bind({});
export const UnCollapsedMode = Template.bind({});
CollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    items: []
}
UnCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: false,
    items: []
}
