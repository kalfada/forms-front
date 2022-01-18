import '../style/AdminPoll.css'

export default function AdminPoll() {
    function addPoll(event) {
        event.preventDefault()

    }
    
    return(
        <div className="admin-poll">
            <form action="" onSubmit={addPoll}>
                <div>כותרת</div>
                <input className='text-input' type="text" name="" id="" />
                <div >תיאור</div>
                <input className='text-input' type="text" name="" id="" />
                <input className='form-btn' type="submit" value="שלח" />
            </form>
        </div>
    )
}