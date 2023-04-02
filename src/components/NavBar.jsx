import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/lighting'>
                        JKLMediaBrothers
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar