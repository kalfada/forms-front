import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PopUpContext } from '../App'
import style from '../style/CreatePoll.module.css'

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
        <div className={style.admin_poll}>
            <form action="" onSubmit={addPoll}>
                <div>כותרת</div>
                <input className={style.text_input} type="text" name="title" />
                <div >תיאור</div>
                <input className={style.text_input} type="text" name="description" />
                <input className={style.form_btn} type="submit" value="שלח" />
            </form>
        </div>
    )
}