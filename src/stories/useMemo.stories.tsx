import React, {useCallback, useMemo, useState} from 'react';

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
export const LikeUseCallback = () => {
    console.log("LiKeUC")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["RS", "JS", "ForEacsh"])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('s') > -1)
        return newArray
    }, [books])

    const addBook =useCallback(() => {
        console.log(books)
        const newBook = [...books,"Angulars " + new Date().getTime()]
        setBooks(newBook)
    },[books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book books={newArray} addBook={addBook}/>
    </>

}
const BooksSecret = (props: { books: Array<string>, addBook:()=>void }) => {
    console.log("bok")
    return <div>
        <button onClick={props.addBook}>add Book</button>
        {props.books.map((b, i) => <div>{b}</div>)}
    </div>
}
const Book = React.memo(BooksSecret)
