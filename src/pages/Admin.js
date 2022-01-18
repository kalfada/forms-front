import NavBar from "../components/NavBar"
import AddBtn from "../components/AddBtn"
import { Link } from "react-router-dom"

export default function Admin() {
    const id = 5
    return (
        <div>
            <NavBar />
            <Link to={`/admin/poll/`}>
                <AddBtn />
            </Link>
        </div>
    )
}