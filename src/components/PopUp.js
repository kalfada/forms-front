import { useContext } from "react";
import { PopUpContext } from "../App";
import style from '../style/PopUp.module.css'

export default function PopUp() {
    const { popUpCon, setPopUpCon } = useContext(PopUpContext)
    return (
        <div id="popup" className={popUpCon ? style.popup : style.popup_off} onClick={(event) => {
            if (event.target.id == 'popup')
                setPopUpCon()
        }}>
            {popUpCon}
        </div>
    )
}

