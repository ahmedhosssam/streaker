import { useParams } from 'react-router-dom'
import pic from '../assets/b1861f7b2c5b4f10.jpg'

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
        rating: 2764,
        problems: problems
    },
    {
        id: 1,
        username: "ahmedtarek157",
        streak: 15,
        problemsnum: 56,
        rating: 1683,
        problems: problems
    },
    {
        id: 2,
        username: "ahmedhossvm",
        streak: 15,
        problemsnum: 47,
        rating: 812,
        rating: 6969,
        problems: problems
    },
    {
        id: 3,
        username: "anongoose",
        streak: 15,
        problemsnum: 37,
        rating: 1024,
        problems: problems
    },
    {
        id: 4,
        username: "mkmo",
        streak: 15,
        problemsnum: 50,
        rating: 792,
        problems: problems
    },
]

const ProfilePage = () => {
    const params = useParams();
    const user = users.find(user => user.id == params.id);
    const tr = "px-6 py-2"

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row flex-center mt-5 gap-4">
                <div className="flex flex-row rounded-full ">
                    <img src={pic} className="w-36 h-36 object-cover rounded-full"></img>
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-xl font-semibold text-gray-600">{user.username}</p>
                    <p className="font-medium text-gray-800">codeforces rating: {user.rating} (max: {user.rating})</p>
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
                {user.problems.map((problem, i) => {
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
    )
}

export default ProfilePage
