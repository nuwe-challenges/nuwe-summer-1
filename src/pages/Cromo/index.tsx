import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';
import CromoBack from '../../components/Cromo/Back'
import CromoFront from '../../components/Cromo/Front'
import CromoMini from '../../components/Cromo/Mini'
import Button from '../../components/Cromo/Button'
import { GiReturnArrow } from 'react-icons/gi'
import "./index.scss";

type props = {
    isShowing: boolean,
    hide: () => void
}

const Cromo = ({
    isShowing, hide,
}: props): any => {
    const [flip, setFlip] = useState(false)
    return (
        isShowing ? ReactDOM.createPortal(<>
            <div className="modal-overlay" />
            <div className="modal-wrapper">
                <Button
                    outline={true}
                    onClick={hide}
                    type='button'>
                    VOLVER AL PERFIL
                </Button>
                <div className="cromos__modal">
                    <CromoMini />
                    <div className="cromos__main">
                        <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                            <CromoFront key='front' flipped={flip} />
                            <CromoBack key='back' flipped={flip} />
                        </ReactCardFlip>
                        <button
                            type="button"
                            className="cromo__flip-btn"
                            onClick={() => setFlip(!flip)}>
                            <GiReturnArrow className='flip' />
                        </button>
                    </div>
                </div>
            </div>
        </>, document.body) : null
    )
}

export default Cromo;