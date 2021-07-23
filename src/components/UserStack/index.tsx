import React from 'react'
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/user.reducer';
import * as logo from '../../assets/icons/stack'
import './index.scss'

type mapType = keyof typeof logo

const UserStack = (): JSX.Element => {
    const user = useSelector(getUser)
    return (
    <fieldset className='stack__container'>
        <legend>Stack</legend>
        <div className="stack__languages">
            {user?.stack && user.stack.map((el: mapType) =>
            <img 
                key='el' 
                src={logo[el]}
                alt=''
            />)}
        </div>
    </fieldset>
)}

export default UserStack;