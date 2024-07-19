import { useLocation } from 'react-router-dom'
import * as S from './styled'
interface Props {
    linkList: Array<string>
}
export const Menu = ({ linkList }: Props) => {
    const links = linkList?.map((link, i) => ({ key: i, value: link }))
    const location = useLocation()

    const { pathname } = location
    return (
        <S.HeaderMenu>
            {links?.map(({ value, key }) => (
                <S.MenuLinkWrapper key={key}>
                    <S.MenuLink
                        to={`/${value}`}
                        clicked={pathname === `/${value}`}
                    >
                        {value}
                    </S.MenuLink>
                </S.MenuLinkWrapper>
            ))}
        </S.HeaderMenu>
    )
}
