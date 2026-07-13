import styled from '@emotion/styled'
import { Button as BaseButton } from '@mui/base/Button'

export const Title = styled.span`
    font-size: 3.2rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Kanit-extrabold;
    width: 100%;
    color: rgb(182, 182, 182, 0.2);
    background: linear-gradient(to right, #fdbbbb, #001c95) no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    @media (max-width: 600px) {
        font-size: 10vw;
    }
`

export const StyleButton = styled(BaseButton)``

export const ContainerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
`
