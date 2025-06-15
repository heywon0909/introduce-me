import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const ContainerWrapper = styled.div<{ gap?: number }>`
    width: 100%;
    height: 100%;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
    gap: ${({ gap }) => gap && `${String(gap)}px`};
`
export const Text = styled.div`
    font-family: NotoSansKR-Medium;
    color: #fff;
    font-size: 1.3rem;
`
export const LinkButton = styled(Link)`
    width: 100px;
    height: 40px;
    background: #201e71;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 5px;
    font-family: NotoSansKR-Medium;
    text-decoration: none;
    :hover {
        background: #23209d;
    }
`
export const Flex = css`
    display: flex;
`
