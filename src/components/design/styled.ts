import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    gap: 3%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const JobDesc = styled.div`
    color: rgb(84 32 181);
    font-size: 1.5rem;
    font-family: Kanit-medium;
    font-weight: 100;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`

export const TitleWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Title = styled.span`
    font-size: 6rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Kanit-extrabold;
    width: 100%;
    color: #000;
    // background: linear-gradient(to right, #fdbbbb, #001c95) no-repeat;
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
    background-image: linear-gradient(120deg, #ffc4f7, #725bdc);
    -webkit-background-clip: text;
    color: transparent;
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
export const FrameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 85%;
    height: 500px;
    border-radius: 2%;
    // background: linear-gradient(120deg, #ffc4f7, #725bdc);
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (min-width: 768px) {
        width: 50%;
    }
`
export const Img = styled.div`
    width: 300px;
    height: auto;
    position: relative;
    flex-shrink: 1;
`

export const ProfileImg = styled.img`
    position: absolute;
    top: 22%;
    left: 27%;
`
