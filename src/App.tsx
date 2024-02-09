import { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Header.tsx'
import Table from './Table.tsx'
import ProfilePage from './ProfilePage.tsx'

interface User {
    username: string,
    streak: number,
    problems: number,
}

interface Problem {
    judge: string,
    problemname: string,
    date: Date,
}

function App() {
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

    const problems: [Problem] = [
        {
            judge: "codeforces",
            problemname: "CF69-D2-B",
            date: new Date("Fri Feb 09 2024")
        },
        {
            judge: "codeforces",
            problemname: "CF420-D2-B",
            date: new Date("Fri Feb 09 2024")
        },
        {
            judge: "UVA",
            problemname: "UVA-69",
            date: new Date("Fri Feb 09 2024")
        },
        {
            judge: "UVA",
            problemname: "UVA-420",
            date: new Date("Fri Feb 09 2024")
        },

    ]

    return (
        <div className="m-7 gap-5">
        <Header/>
        {/*<Table users={users}/>*/}
        {/*<ProfilePage problems={problems}/>*/}
        <Outlet/>

        </div>
    )
}

export default App
