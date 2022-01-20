import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PopUpContext } from '../App'
import '../style/CreatePoll.css'

export default function CreatePoll() {
    const navigate = useNavigate()
    const {setPopUpCon} = useContext(PopUpContext)
    function addPoll(event) {
        event.preventDefault()
        const formEl = new FormData(event.target)
        let values = {}
        for (const pair of formEl) {
            values[pair[0]] = pair[1]
        }
        axios.post('http://localhost:3000/polls', values)
            .then(res => {
                navigate(`/admin/poll/${res.data._id}`)
                setPopUpCon()
            })
    }

    return (
        <div className="admin-poll">
            <form action="" onSubmit={addPoll}>
                <div>כותרת</div>
                <input className='text-input' type="text" name="title" />
                <div >תיאור</div>
                <input className='text-input' type="text" name="description" />
                <input className='form-btn' type="submit" value="שלח" />
            </form>
        </div>
    )
}