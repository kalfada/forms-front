import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../style/AdminPoll.css'

export default function AdminPoll() {
    const [poll, setPoll] = useState('')
    const {id} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:3000/polls/${id}`)
            .then(res=> setPoll(res.data))
    },[])
    console.log(poll);
    return(
        <div>
            <h1>{poll.title}</h1>
        </div>
    )
}