import React, { useState } from 'react'
import './index.scss'
import Profile from './Profile'
import Timeline from './Timeline'
import Social from './Social'
import { texts } from '../../constants'

const ProfileTabs = () : JSX.Element => {

    const [currentTab, setCurrentTab] = useState(0)
    const components = [
        (<Profile key='tab-0'/>), 
        (<Social key='tab-1'/>), 
        (<Timeline key='tab-2'/>)
    ]
    return (
        <section>
            <div className="tabs__header">
                <ul>
                    <li><button type='button' onClick={ () => setCurrentTab(0) }>{texts.perfil.tabs[0]}</button></li>
                    <li><button type='button' onClick={ () => setCurrentTab(1) }>{texts.perfil.tabs[1]}</button></li>
                    <li><button type='button' onClick={ () => setCurrentTab(2) }>{texts.perfil.tabs[2]}</button></li>
                </ul>
            </div>
            <div className="tabs__content">
                { components[ currentTab ] }
            </div>
        </section>
)}

export default ProfileTabs;