import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link, {
    shouldForwardProp: (propName): propName is 'clicked' =>
        propName !== 'clicked',
})<{ clicked?: boolean }>`
    text-align: center;
    color: rgb(123 123 123);
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0.7rem 1.4rem;
    border-radius: 20px;
    text-decoration-line: none;
    font-family: NotoSansKR-Medium;
    font-size: 1rem;
    font-family: NotoSansKR-Medium;
    cursor: pointer;
    text-decoration-line: none;
    &:hover {
        color: #fff;
    }
    &:active {
        color: #fff;
    }
    ${(props) =>
        props.clicked &&
        `
    color:#fff;
  `};
`
