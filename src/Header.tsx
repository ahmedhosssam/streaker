import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="flex flex-row justify-center justify-between">
            <div className="text-4xl">
                <Link to="/">Streaker</Link>
            </div>
            <div className="flex flex-row justify-center justify-between gap-4">
                <div>ahmedhossvm</div>
                <div>Logout</div>
            </div>
        </div>
    )
}

export default Header
