import React from 'react'
import { javascript } from '../../assets/icons/stack'
import './index.scss'

const stackDefault=['javascript','javascript','javascript','javascript']
const logos = {
    javascript,
}
type props = { stack?: string[] }

const UserStack = ({ stack=stackDefault }: props): JSX.Element => (
    <fieldset className='stack__container'>
        <legend>Stack</legend>
        <div className="stack__languages">
            {stack && stack.map(el=>
            <img 
                key='el' 
                src={ logos.javascript }
                alt=''
            />)}
        </div>
    </fieldset>
)

export default UserStack;