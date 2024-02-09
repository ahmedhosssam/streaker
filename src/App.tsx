import { useState } from 'react'
import Header from './Header.tsx'
import Table from './Table.tsx'

interface User {
    username: string,
    streak: number,
    problems: number,
}

function App() {
    const tr = "px-6 py-2"
    const users: [User] = [
        {
            username: "moosayed",
            streak: 15,
            problems: 35
        },
        {
            username: "ahmedtarek157",
            streak: 15,
            problems: 56,
        },
        {
            id: 5271221,
            username: "ahmedhossvm",
            streak: 15,
            problems: 47,
            rating: 812,
        },
        {
            username: "anongoose",
            streak: 15,
            problems: 37
        },
        {
            username: "mkmo",
            streak: 15,
            problems: 50
        },
    ]
    users.sort((a, b) => {
        if (a.streak < b.streak || a.problems < b.problems) {
            return 1;
        } else {
            return -1;
        }
        return 0;
    })


    return (
        <div className="m-7 gap-5">
        <Header/>
        <Table users={users}/>
        </div>
    )
}

export default App
