import axios from "axios"
import { useEffect, useState } from "react"
import '../style/AllPolls.css'

export default function AllPolls() {
    const [polls , setPolls] = useState([])
    
    useEffect(()=> axios.get('http://localhost:3000/polls')
        .then(res=> setPolls(res.data)),[])

    console.log(polls);
    
    return (
    <div className="polls">
        {polls.map(poll => 
            <div key={poll._id} className="single-poll">
                <h5>{poll.title}</h5>
                <h6>{poll.description}</h6>
            </div>
        )}
    </div>
    )
}