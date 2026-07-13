import { LinkProps } from 'react-router-dom'
import * as S from './styled'
type Props = LinkProps
export const MenuLink = (props: Props) => {
    return <S.MenuLink {...props}>{props.children}</S.MenuLink>
}
