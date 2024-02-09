import { useState } from 'react'
import Header from './Header.tsx'

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
        <table className="text-center mt-5">
            <caption className="bg-gray-200 px-6 py-1">Streak Leaderboard</caption>
            <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                    <th scope="col" className={tr}>#</th>
                    <th scope="col" className={tr}>Username</th>
                    <th scope="col" className={tr}>Streak</th>
                    <th scope="col" className={tr}>Problems</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, i) => {
                const color:boolean = i%2 == 0
                return (
                      <tr key={i} className="border-b dark:border-neutral-400" className={color ? "bg-gray-100" : ""}>
                          <td className={tr} className="">{i+1}</td>
                          <td className={tr}>{user.username}</td>
                          <td className={tr}>{user.streak}</td>
                          <td className={tr}>{user.problems}</td>
                      </tr>
                )
              }
              )}
            </tbody>
        </table>
        </div>
    )
}

export default App
