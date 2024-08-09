import styled from '@emotion/styled'

export const FullWrapper = styled.div<{ gap?: number }>`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: rgb(14, 16, 15);
    gap: ${({ gap }) => gap && `${gap}px`};
`
