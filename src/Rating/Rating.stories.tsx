import {Story} from "@storybook/react";
import React, {useState} from "react";
import {Rating,RatingPropsType,RatingValueType} from "./Rating";

export default {
    title: 'ts_learning/RatingComponent',
    component: Rating,
}


const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>;

export const EmptyStars = Template.bind({});
export const Rating1 = Template.bind({});
export const Rating2 = Template.bind({});
export const Rating3 = Template.bind({});
export const Rating4 = Template.bind({});
export const Rating5 = Template.bind({});
EmptyStars.args ={
    value: 0
}
Rating1.args ={
    value: 1
}
Rating2.args ={
    value: 2
}
Rating3.args ={
    value: 3
}
Rating4.args ={
    value: 4
}
Rating5.args ={
    value: 5
}

export const ChangeRating = ()=> {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}
