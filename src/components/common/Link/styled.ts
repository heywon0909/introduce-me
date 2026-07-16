import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link, {
    shouldForwardProp: (propName): propName is 'clicked' =>
        propName !== 'clicked',
})<{ clicked?: boolean }>`
    text-align: center;
    color: #fff;
    background: linear-gradient(135deg, #6d8bff, #9b6dff);
    padding: 0.7rem 1.4rem;
    border-radius: 20px;
    text-decoration-line: none;
    font-family: NotoSansKR-Medium;
    font-size: 1rem;
    font-family: NotoSansKR-Medium;
    cursor: pointer;
    text-decoration-line: none;
    &:hover {
        background: linear-gradient(135deg, #5972d4, #8259d9);
        color: #d6d5d5;
    }
    &:active {
        opacity: 0.7;
    }
    ${(props) =>
        props.clicked &&
        `
    color:#fff;
  `};
`
