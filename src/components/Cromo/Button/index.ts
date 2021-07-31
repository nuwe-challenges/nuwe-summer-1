import styled from 'styled-components'

type Props = {
    outline?: boolean
}

const Button = styled.button<Props>`
    display: flex;
    cursor: pointer;
    padding: 10px 50px;
    border-radius: 5px;
    border: none; 
    transition: ease-in .15s;
    color: ${props => props.outline ? props.theme.secondary : props.theme.primaryLight};
    background-color: ${props => props.outline ? props.theme.primary : props.theme.secondary};
    &:hover {
        background-color: ${props => props.theme.primaryLight};
    }
`

export default Button;