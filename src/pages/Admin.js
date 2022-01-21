import NavBar from "../components/NavBar"
import AddBtn from "../components/AddBtn"
import AllPolls from "../components/AllPolls"

export default function Admin() {
    return (
        <div>
            <NavBar />
            <AllPolls />
            <AddBtn />
        </div>
    )
}