import {reducer, StateType, TOOGLE_CONSTANT} from "./Reducer";
import {stat} from "fs";

test('reducer should change value to opposite value', () => {
    //data
    const state: StateType ={
        collapsed:false
    }

    //action
    const newState=reducer(state, {type: TOOGLE_CONSTANT})

    //expection
    expect(newState.collapsed).toBe(true)

})
