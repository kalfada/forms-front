import Style from '../style/AddBtn.module.css'
import { PopUpContext } from '../App'
import { useContext } from 'react'
import CreatePoll from './CreatePoll'

export default function AddBtn() {
    const {setPopUpCon} = useContext(PopUpContext)

    function newPoll() {
        setPopUpCon(<CreatePoll />)
    }
    return(

        <button className={Style.btn} onClick={newPoll}>
            +
        </button>
    )
}