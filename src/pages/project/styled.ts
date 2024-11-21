import { Flex } from '@common/styled'
import styled from '@emotion/styled'

export const ContainerWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 57px);
    display: flex;
    position: relative;
    flex-direction: column;
    position: relative;
    top: 2%;
    background-color: rgb(14, 16, 15);
`

export const ColumnContainer = styled.div`
    ${Flex};
    flex-direction: column;
`

export const RowContainer = styled.div`
    ${Flex};
    flex-direction: row;
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
`
export const Title = styled.div`
    font-family: Poppins-black;
    color: #fff;
    font-size: 1.5rem;
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
    color: #0ebeff;
    font-family: Poppins-black;
`
export const Desc = styled.div`
    color: #fff;
`
export const ProjectImg = styled.img`
    object-fit: cover;
    width: auto;
    height: auto;
    max-width: 400px;
`
