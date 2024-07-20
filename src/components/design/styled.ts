import styled from '@emotion/styled'

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
    color: rgb(157 157 157);
    font-family: NotoSansKR-Bold;
    font-weight: 800;
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
    }
    @media (min-width: 768px) {
        width: 70%;
    }
`
