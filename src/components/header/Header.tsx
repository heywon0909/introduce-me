import { LogoText } from '@components/header/atoms/LogoText'
import { ReactNode, useMemo } from 'react'
import * as S from './styled'
import { Menu } from './atoms/MenuLink'
interface Props {
    Logo?: ReactNode
    MenuLink?: ReactNode
}

export const MainHeader = () => {
    const memolinkList = useMemo(() => ['info', 'career', 'project'], [])

    return (
        <Header
            Logo={<LogoText name="heywon0909" />}
            MenuLink={<Menu linkList={memolinkList} />}
        />
    )
}

const Header = ({ Logo, MenuLink }: Props) => (
    <S.Header>
        {Logo}
        {MenuLink}
    </S.Header>
)
