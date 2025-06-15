import styled from '@emotion/styled'
import { Button as BaseButton } from '@mui/base/Button'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    @media screen {
        gap: 3%;
    }

    @media (min-width: 768px) {
        flex-direction: column;
        gap: 8%;
    }
`

export const Img = styled.div<{ url: string }>`
    width: 300px;
    height: 300px;
    position: relative;
    background-image: url(${(props) => props.url});
    background-size: contain;
    background-repeat: no-repeat;
    flex-shrink: 1;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

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

export const TitleDesc = styled.div`
    color: #fff;
    line-height: 20px;
    font-size: 30px;
`

export const ProfileImg = styled.img`
    position: absolute;
    top: 22%;
    left: 27%;
`

export const ProfileDesc = styled.div`
    color: #fff;
    font-size: 30px;
    font-family: 'Noto Sans KR';
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const JobTitle = styled.div`
    color: rgb(255, 252, 225);
    width: 280px;
    font-size: 1.8rem;
    font-family: Poppins-black;
    font-weight: 100;
`

export const JobDesc = styled.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`

export const Frame = styled.div<{ left?: number; right?: number }>`
    position: absolute;
    display: flex;

    ${(props) =>
        props.left &&
        `
    left:${String(props.left)}%;
  `};
    ${(props) =>
        props.right &&
        `
    right:${String(props.right)}%;
  `};
    flex-direction: column;
    @media (min-width: 768px) {
        ${(props) =>
            props.left &&
            `
    left:${String(props.left + 10)}%;
  `};
        ${(props) =>
            props.right &&
            `
    right:${String(props.right + 10)}%;
  `};
    }
`

export const FrameText = styled.span`
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
`

export const Wrapper = styled.div<{ dir?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${({ dir }) => dir ?? 'column'};
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const FrameContainer = styled.div<{ url: string }>`
    display: flex;
    justify-content: space-between;
    background-color: white;
    gap: 10px;
    width: 85%;
    height: 700px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10%;
    }
    @media (min-width: 768px) {
        width: 70%;
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

export const Footer = styled.footer<{ display?: string }>`
    position: absolute;
    width: 100%;
    background: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 10%,
        rgba(0, 0, 0, 0.8) 20%,
        rgba(0, 0, 0, 1) 30%,
        rgb(0, 0, 0)
    );
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    bottom: 0;
`
export const Text = styled.p`
    // font-family: Kanit-medium;
    color: #c3c3c3;
    font-size: 1rem;
`

export const InfoTitle = styled.h3<{ margin?: number }>`
    font-family: Kanit-medium;
    color: #737373;
    font-size: 1.7rem;
    font-weight: 500;
    margin: ${({ margin }) => margin && `${String(margin)}px`};
`

export const Content = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2px 2px;
    justify-content: center;
    align-items: center;
`
