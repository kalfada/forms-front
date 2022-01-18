import '../style/NavBar.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul>
                <Link to={'/'}>
                    <li>משתמשים</li>
                </Link>
                <Link to='/'>
                    <li>סקרים</li>
                </Link>
                <Link to='/'>
                    <li>סטטיסטיקות</li>
                </Link>
            </ul>
        </nav>
    )
}