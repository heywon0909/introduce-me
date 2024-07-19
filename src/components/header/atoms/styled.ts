import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
`

export const LogoImgWrapper = styled.div`
    width: 40px;
    height: 40px;
    margin-top: -2px;
    margin-left: 5px;
`

export const Logo = styled.span`
    color: #fff;
    font-family: Lemon;
    font-size: 16px;
`

export const LogoWrapper = styled(Link)`
    width: auto;
    display: flex;
    align-items: center;
    text-decoration-line: none;
`
export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2px;
    width: 30%;
`
export const MenuLinkWrapper = styled.div`
    display: flex;
    @media (max-width: 660px) {
        display: none;
    }
`

export const MenuLink = styled(Link)<{ clicked: boolean }>`
    width: 100%;
    color: rgb(123 123 123);
    font-family: NotoSansKR-Medium;
    font-size: 16px;
    cursor: pointer;
    text-decoration-line: none;
    &:hover {
        color: #fff;
    }
    &:active {
        color: #fff;
    }
    ${(props) =>
        props.clicked &&
        `
    color:#fff;
  `};
`
