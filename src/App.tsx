import { useState } from 'react'

function App() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ahmedtarek175</td>
              <td>15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ahmedhossvm</td>
              <td>15</td>
            </tr>
            <tr>
              <td>3</td>
              <td>anongoose</td>
              <td>15</td>
            </tr>
            <tr>
              <td>4</td>
              <td>mkmo</td>
              <td>14</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default App
