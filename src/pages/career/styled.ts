import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const Title = styled.h2`
    font-family: Poppins-black;
    color: #fff;
    font-size: 2rem;
    margin: 0.09em;
`

export const Text = styled.p`
    font-family: Poppins-black;
    color: rgb(182 182 182);
    font-size: 1.1rem;
`

//TODO: design 폴더에 넣어야할ㄷ듯...?
export const Grid = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
        linear-gradient(rgba(48, 54, 61, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(48, 54, 61, 0.3) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
    -webkit-mask-image: radial-gradient(
        ellipse at center,
        black 30%,
        transparent 70%
    );
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Li = styled.li`
    font-family: NotoSansKR-Regular;
    color: rgb(182 182 182);
    font-size: 1rem;
    padding: 0.4em 0.5em;
`
export const Ul = styled.ul`
    padding: 0px 10px;
`

export const Article = styled.article`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 70%;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`
export const Company = styled.div``
export const Description = styled.div`
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 1.5rem;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    opacity: 1;
    transform: translateY(40px);
    max-width: 700px;
`

export const SectionBG = styled.div<{ bg: string }>`
    height: 100vh;
    background: ${({ bg }) => bg};
    gap: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const IntroduceArticle = styled(Article)`
    background: rgb(166 166 166 / 14%);
    backdrop-filter: blur(90px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem;
    flex-direction: row;
`

export const WaveDivider = styled.div`
    position: absolute;
    top: -2px;
    left: 0;
    width: 100%;
    height: 80px;
    overflow: hidden;
`

export const Group = styled.div`
    z-index: 1;
`

export const ContentWrapper = styled.div`
    height: auto;
    display: flex;
    gap: 5%;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`

export const CompanyWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 700px) {
        flex-direction: column;
        width: unset;
    }
`

export const CompanyLogo = styled.div`
    width: 300px;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const CompanyCareer = styled.div`
    padding: 2px 15px;
    border-left: 0.1rem solid #7c7c7c;
    display: flex;
    width: 60%;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 600px) {
        width: unset;
    }
`

export const CompanyImg = styled.img<{ src: string }>`
    width: 160px;
    height: 160px;
    clip-path: circle(80px);
    ${(props) =>
        props.src &&
        `
    src:${props.src};
  `};
`

export const CompanyTitle = styled.h2`
    font-family: NotoSansKR-Bold;
    color: rgb(182 182 182);
    font-size: 1.5rem;
`

export const CompanyPeriod = styled.div`
    font-family: Poppins-black;
    color: #fff;
`

export const CompanyDesc = styled.div`
    font-family: NotoSansKR-Light;
    color: #fff;
`

export const CompanyLine = styled.div`
    border-b: 1px solid #fff;
`

export const CompanyBackground = styled.div`
    font-family: NotoSansKR-Light;
    font-size: 0.9rem;
`

export const WorkTitle = styled.div`
    color: #9660fc;
    height: 64px;
    display: flex;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    font-family: NotoSansKR-Regular;
    font-size: 1rem;
`

export const WorkWrapper = styled.ul`
    color: #fff;
`

export const WorkList = styled.li`
    color: #fff;
`

const bubbleRise = keyframes`
        0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1; /* 나타남 */
        }
        90% {
            opacity: 1;
        }
        100% {
            /* 위로 1000px만큼 올라가면서 살짝 우측으로 흔들리고 커짐 */
            transform: translateY(-1000px) translateX(20px) scale(1.2);
            opacity: 0; /* 사라짐 */
        }
  `

export const Bubble = styled.div`
    position: absolute;
    border-radius: 50%;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.02)
    );
    border: 1px solid rgba(255, 255, 255, 0.05);
    pointer-events: none;
    animation: ${bubbleRise} linear infinite;
`
