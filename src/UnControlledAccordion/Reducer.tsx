export type ActionType = {
    type: string
}
export type StateType={
    collapsed:boolean
}

export const TOOGLE_CONSTANT = "TOOGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOOGLE_CONSTANT:

            return {...state,
                collapsed: !state.collapsed};
        default:
            return state;
    }

    return state;
}
