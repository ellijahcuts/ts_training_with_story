import React, {useState} from 'react';

export default {
    title: 'ts_learning/React.memo.demo',

}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Misha", "Val9"])

    const addUser = () => {
        const newUser = [...users,"Max " + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}
