import React, {useMemo, useState} from 'react';

export default {
    title: 'ts_learning/useMemo.demo',

}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e => setA(+e.currentTarget.value))}/>
        <input value={b} onChange={(e => setB(+e.currentTarget.value))}/>
        <hr/>
        <div>
            result for a:{resultA}
        </div>
        <div>
            result for b:{resultB}
        </div>
    </>

}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("UsersSecret")
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)

export const HelpsForMemoExample = () => {
    console.log("HelpsForMemoExample")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Misha", "Val9"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('d') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = [...users,"MadMax " + new Date().getTime()]
        setUsers(newUser)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <button onClick={addUser}>add user</button>
        <Users users={newArray}/>
    </>

}


