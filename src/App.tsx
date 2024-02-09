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
            problems: 56
        },
        {
            username: "ahmedhossvm",
            streak: 15,
            problems: 47
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

        <h3 className="mt-5">Streak Leaderboard: </h3>

        <table className="border-collapse border-separate border-spacing-2 table-auto">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Streak</th>
              <th>Problems</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, i) => {
              return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{user.username}</td>
                        <td>{user.streak}</td>
                        <td>{user.problems}</td>
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
