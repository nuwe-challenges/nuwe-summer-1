import styled from 'styled-components'

const Button = styled.button`
    display: flex;
    background-color: ${props=>props.theme.backgroundDark};
    padding: 17px;
    border-radius: 10px;
    border: none; 
    &:hover {
        background-color: ${props=>props.theme.paper};
    }
`

export default Button;