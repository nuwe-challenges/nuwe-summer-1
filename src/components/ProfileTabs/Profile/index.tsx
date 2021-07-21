import React from 'react'
import { texts } from '../../../constants'

const Profile = () : JSX.Element => (
    <div>
        <div className="profile__hard">
            <h2>{texts.perfil.hard}</h2>
            <div className="profile__top">
                <h3>{texts.perfil.top}</h3>

            </div>
            <div className="profile__other">
                <h3>{texts.perfil.other}</h3>

            </div>
        </div>

        <div className="profile__soft">
            <h2>{texts.perfil.soft}</h2>
            <div className="profile__puntuaciones">
                <h3>{texts.perfil.puntuaciones}</h3>
            </div>
        </div>
    </div>
)

export default Profile;