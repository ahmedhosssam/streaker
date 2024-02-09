import { useState } from 'react'
import Header from './Header.tsx'
import Table from './Table.tsx'
import pic from '../assets/b1861f7b2c5b4f10.jpg'

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

    const tr = "px-6 py-2"

    return (
        <div className="m-7 gap-5">
        <Header/>

        <div className="flex flex-col gap-6">
            <div className="flex flex-row flex-center mt-5 gap-4">
                <div className="flex flex-row rounded-full ">
                    <img src={pic} className="w-36 h-36 object-cover rounded-full"></img>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-xl font-semibold text-gray-600">ahmedhossvm</p>
                    <p className="font-medium text-gray-800">codeforces rating: 812 (max: 812)</p>
                </div>
            </div>

            <p className="text-2xl text-bold">Problems: </p>

            <table className="text-center">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                        <th scope="col" className={tr}>Judge</th>
                        <th scope="col" className={tr}>Problem Name</th>
                        <th scope="col" className={tr}>When</th>
                    </tr>
                </thead>
                <tbody>
                {problems.map((problem, i) => {
                    const color:boolean = i%2 == 0
                    return (
                          <tr key={i} className="border-b dark:border-neutral-400" className={color ? "bg-gray-100" : ""}>
                              <td className={tr}>{problem.judge}</td>
                              <td className={tr}>{problem.problemname}</td>
                              <td className={tr}>{problem.date.toString()}</td>
                          </tr>
                    )
                  }
                  )}
                </tbody>
            </table>
        </div>

        {/*<Table users={users}/>*/}
        </div>
    )
}

export default App
