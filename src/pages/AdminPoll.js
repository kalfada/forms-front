import CreatePoll from '../components/CreatePoll'
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from '../style/AdminPoll.module.css'

export default function AdminPoll() {
    const [poll, setPoll] = useState('')
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:3000/polls/${id}`)
            .then(res=> setPoll(res.data))
    },[])
    return(
        <div>
            <h2>עריכת סקר</h2>
            <CreatePoll />
        </div>
    )
}