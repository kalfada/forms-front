import style from '../style/NavBar.module.css'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <nav className={style.nav_bar}>
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