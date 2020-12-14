import React from 'react'
import { FaTimes} from 'react-icons/fa'
import { MdKeyboardBackspace } from "react-icons/md"
const PopupBottomUi = () => {
    return (
        <div className="popup-bottom">
             <div className="content-bottom-left">
                <span>
                    <FaTimes size={ 16 } />
                </span>
                <span>Annuler la creation du compte</span>
             </div>
            
            <div className="content-bottom-right">
                <span>
                    <MdKeyboardBackspace size={ 16 } />
                </span>
                <span>Retour</span>
            </div>
        </div>
    )
}

export default PopupBottomUi
