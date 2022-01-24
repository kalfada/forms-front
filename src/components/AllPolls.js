import axios from "axios"
import { useEffect, useState } from "react"
import Style from '../style/AllPolls.module.css'
import moment from 'moment'

export default function AllPolls() {
    const [polls , setPolls] = useState([])
    
    useEffect(()=> axios.get('http://localhost:3000/polls')
        .then(res=> setPolls(res.data)),[])

    
    return (
    <div className={Style.polls}>
        {polls.map(poll => 
            <div key={poll._id} className={Style.single_poll}>
                <h5>{poll.title}</h5>
                <h6>{poll.description}</h6>
                <div>{moment(poll.creationDate).format("DD.MM.YY")}</div>
            </div>
        )}
    </div>
    )
}