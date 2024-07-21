import styled from '@emotion/styled'

export const Footer = styled.footer<{ visible?: string }>`
    position: relative;
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
    height: 60vh;
    bottom: 0;
    // visibility: ${({ visible }) => visible || 'hidden'};
    margin-top: 123vh;
    z-index: 500;
    ::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
            rgba(0, 0, 0, 0) 5%,
            rgba(0, 0, 0, 0.3) 20%,
            rgba(0, 0, 0, 0.6) 30%,
            rgba(0, 0, 0, 0.8) 40%,
            rgba(0, 0, 0, 1) 50%,
            rgb(0, 0, 0)
        );
        z-index: -7;
    }
`
export const Text = styled.p`
    // font-family: Kanit-medium;
    color: #c9bfbf;
    font-size: 1rem;
`

export const InfoTitle = styled.h3<{ margin?: number }>`
    font-family: Kanit-medium;
    color: #fff;
    font-size: 1.7rem;
    font-weight: 500;
    margin: ${({ margin }) => margin && `${margin}px`};
`

export const Content = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 2px 2px;
    justify-content: center;
    align-items: center;
`
