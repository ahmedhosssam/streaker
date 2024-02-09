import { useState } from 'react'

interface User {
    username: string,
    streak: number,
    problems: number,
}

function App() {
    const users: [User] = [
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
            problems: 56
        },
        {
            username: "moosayed",
            streak: 12,
            problems: 35
        },
    ]

    const tr = "px-6 py-2"

    return (
      <div className="m-7 gap-5">

        <div className="flex flex-row justify-center justify-between">
            <div className="text-4xl">
                Streaker
            </div>
            <div className="flex flex-row justify-center justify-between gap-4">
                <div>ahmedhossvm</div>
                <div>Logout</div>
            </div>
        </div>

        <table className="text-center mt-5">
          <caption className="bg-gray-300 px-6 py-1">Streak Leaderboard</caption>
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
              return (
                    <tr key={i} className="border-b dark:border-neutral-400">
                        <td className={tr}>{i+1}</td>
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
