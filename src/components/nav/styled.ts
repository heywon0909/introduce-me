import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px;
    border-bottom: 1px solid #515151;
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
`

export const MenuLink = styled.a`
    width: 100%;
    color: rgb(123 123 123);
    font-family: NotoSansKR-Medium;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`

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
    color: rgb(255, 252, 225);
    font-family: Lemon;
    font-size: 16px;
`

export const LogoWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
`

export const Frame = styled.div<{ left?: number; right?: number }>`
    position: absolute;
    display: flex;

    ${(props) =>
        props.left &&
        `
    left:${props.left}%;
  `};
    ${(props) =>
        props.right &&
        `
    right:${props.right}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${(props) =>
            props.left &&
            `
    left:${props.left + 10}%;
  `};
        ${(props) =>
            props.right &&
            `
    right:${props.right + 10}%;
  `};
    }
`

export const FrameText = styled.span`
    color: rgb(255, 252, 225);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`

export const Bottom = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 4%;
    @media (max-width: 768px) {
        bottom: 0;
    }
`

export const BottomText = styled.span`
    color: rgb(255, 252, 225);
    font-family: Lemon;
    font-size: 30px;
    font-weight: 800;
`

export const FrameContainer = styled.div<{ url: string }>`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 85%;
    height: 91%;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        width: 70%;
        height: 80%;
    }
`

export const WrapNav = styled.aside`
    position: fixed;
    z-index: 100;
    top: 37%;
`

export const FloatNav = styled.div<{ left?: boolean; right?: boolean }>`
    width: 60px;
    height: 230px;
    aspect-ratio: 1 / 1;
    position: absolute;
    border-radius: 5px;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    border-right: 2px solid gray;
    display: flex;
    top: 40%;
    z-index: 1;
    ${(props) =>
        props.left &&
        `
    left:0;
  `};
    ${(props) =>
        props.right &&
        `
    right:0;
  `};

    @media (max-width: 768px) {
        display: none;
    }
    transition: all 0.5s ease-out;
    &:hover {
        width: 100px;
    }
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    inset: 3px;
    gap: 15px;
    z-index: 1;
    padding: 2px 8px;
`

export const NavText = styled.span`
    color: #fff;
    font-family: NotoSansKR-Medium;
    font-weight: 400;
    padding-left: 3px;
`
export const NavWrapper = styled.div<{ dir?: 'column' | 'row' }>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    align-items: center;
    padding: 2px 5px;
    ${(props) =>
        props.dir &&
        `
    flex-direction:${props.dir};
  `};
`
export const NavWrapperLink = styled(Link)<{ dir?: 'column' | 'row' }>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    align-items: center;
    padding: 2px 5px;
    ${(props) =>
        props.dir &&
        `
    flex-direction:${props.dir};
  `};
`

export const NavImg = styled.img`
    width: 20px;
    height: 20px;
`

export const NavTitle = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    font-family: NotoSansKR-Medium;
    font-weight: 400;
`
