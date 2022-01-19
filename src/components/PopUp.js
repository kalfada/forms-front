import { useContext } from "react";
import { PopUpContext } from "../App";


import '../style/PopUp.css'

export default function PopUp() {
    const { popUpCon, setPopUpCon } = useContext(PopUpContext)
    return (
        <div className={popUpCon ? 'popup' : 'popup-off'} onClick={(event) => {
            if (event.target.className == 'popup')
                setPopUpCon()
        }}>
            {popUpCon}
        </div>
    )
}

