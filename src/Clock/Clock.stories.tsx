import {Story} from "@storybook/react";
import React from "react";
import {Clock} from "./Clock";

export default {
    title: 'ts_learning/ClockComponents',
    component: Clock,
    args: {}
}

const Template: Story = (args) => <Clock {...args}/>;

export const ClocksAnalog = Template.bind({});
ClocksAnalog.args = {
    mode: "analog"
}
export const ClocksDigital = Template.bind({});
ClocksDigital.args = {
    mode: "digital"
}
