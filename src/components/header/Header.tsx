import * as S from './styled'
import { LogoText } from '@components/header/atoms/LogoText'
import { Menu } from './atoms/MenuLink'
import { useMemo } from 'react'
interface Props {
    Logo?: React.ReactNode
    MenuLink?: React.ReactNode
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

const Header = ({ Logo, MenuLink }: Props) => {
    console.log('렌더')
    return (
        <S.Header>
            {Logo}
            {MenuLink}
        </S.Header>
    )
}
