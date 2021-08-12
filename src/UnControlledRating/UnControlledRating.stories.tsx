import {Story} from "@storybook/react";
import React, {useState} from "react";
import {RatingPropsType, UnControlledRating} from "./UnControlledRating";
import {RatingValueType} from "../Rating/Rating";
import {action, actions} from "@storybook/addon-actions";

export default {
    title: 'ts_learning/UnControlledRatingComponent',
    component: UnControlledRating,
}

const callback = action("rating changed inside components")

const Template: Story<RatingPropsType> = (args) => <UnControlledRating {...args}/>;

export const EmptyStars = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});
EmptyStars.args ={
    defaultValue: 0,
    onChange:(callback)
}
Rating1.args ={
    defaultValue: 1,
    onChange:(callback)
}
Rating2.args ={
    defaultValue: 2,
    onChange:(callback)
}
Rating3.args ={
    defaultValue: 3,
    onChange:(callback)
}
Rating4.args ={
    defaultValue: 4,
    onChange:(callback)
}
Rating5.args ={
    defaultValue: 5,
    onChange:(callback)
}
