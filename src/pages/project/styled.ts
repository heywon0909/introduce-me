import { Flex } from '@common/styled'
import styled from '@emotion/styled'

export const ContainerWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        18deg,
        #000207 15%,
        rgb(3 43 70) 60% 60%,
        rgb(11 13 13) 100%
    );
`

export const ColumnWrapper = styled.div`
    ${Flex};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ProjectDescription = styled.div`
    ${Flex};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
        max-width: 600px;
        align-items: flex-start;
    }
`

export const ColumnContainer = styled.div`
    ${Flex};
    width: 100%;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const RowContainer = styled.article`
    ${Flex};
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    margin: 0 0.85em;
    @media (max-width: 992px) {
        flex-wrap: wrap;
        align-items: center;
    }
`
export const BgImg = styled.img`
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
`

export const FlexContainer = styled.div`
    ${Flex};
    width: 100%;
    height: 300px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    gap: 30px;
    position: absolute;
`
export const Title = styled.div`
    font-family: NotoSansKR-SemiBold;
    color: #0ae448;
    font-size: 1.2rem;
`

export const App = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
`

export const AppDetail = styled.div`
    width: auto;
    height: 200px;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e4d;
    gap: 20px;
    padding: 10px 10px;
`

export const AppDesc = styled.div`
    color: #fff;
`
export const AppContainer = styled.div`
    ${Flex};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const Core = styled.h2`
    font-family: NotoSansKR-SemiBold;
    color: #b7b7b7;
`
export const Desc = styled.div`
    color: #fff;
    min-width: 600px;
    min-height: 600px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: auto;
    }
`

export const ProjectImg = styled.img`
    object-fit: cover;
    width: auto;
    height: auto;
    width: 100%;
    max-width: 400px;

    @media (max-width: 768px) {
        max-width: 100%;
        min-width: 400px;
    }
`

export const LinkWrapper = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
`

export const Link = styled.a`
   text-align: center;
    color: rgb(123 123 123);
    background: linear-gradient(135deg, #a1a3ac, #ffffff);
    padding: 0.5em 1.1em;
    border-radius: 20px;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:6px;
    text-decoration-line: none;
    font-family: NotoSansKR-Medium;
    font-size: 1rem;
    font-family: NotoSansKR-Medium;
    cursor: pointer;
    text-decoration-line: none;
    min-width:120px;
    &:hover {
        color: #37393a;
    }
    &:active {
        color: #000;
        opacity: 0.7;
    }
    
    };
`

export const LinkDescription = styled.p`
    margin: 0;
`
