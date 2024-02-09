import { Link } from 'react-router-dom'

const Table = ({users}) => {
    const tr = "px-6 py-2"
    return (
        <div className="flex flex-col">
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
                          <td className={tr}>{i+1}</td>
                          <td className={tr} className="font-semibold underline"><Link to={`users/${user.id}`}>{user.username}</Link></td>
                          <td className={tr}>{user.streak}</td>
                          <td className={tr}>{user.problemsnum}</td>
                      </tr>
                )
              }
              )}
            </tbody>
        </table>
        </div>
    )
}

export default Table
