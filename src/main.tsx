import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ProfilePage from './ProfilePage.tsx'
import Table from './Table.tsx'
import css from './main.css'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom"

interface Problem {
    judge: string,
    problemname: string,
    date: Date,
}

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

const users: [User] = [
    {
        id: 0,
        username: "moosayed",
        streak: 15,
        problemsnum: 35,
        problems: problems
    },
    {
        id: 1,
        username: "ahmedtarek157",
        streak: 15,
        problemsnum: 56,
        problems: problems
    },
    {
        id: 2,
        username: "ahmedhossvm",
        streak: 15,
        problemsnum: 47,
        rating: 812,
        problems: problems
    },
    {
        id: 3,
        username: "anongoose",
        streak: 15,
        problemsnum: 37,
        problems: problems
    },
    {
        id: 4,
        username: "mkmo",
        streak: 15,
        problemsnum: 50,
        problems: problems
    },
]
users.sort((a, b) => {
    if (a.streak < b.streak || a.problemsnum < b.problemsnum) {
        return 1;
    } else {
        return -1;
    }
    return 0;
})


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>Error 404: Not found.</div>,
        children: [
            {
                path: "/",
                element: <Table users={users}/>
            },
            {
                path: "users/:id",
                element: <ProfilePage/>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
