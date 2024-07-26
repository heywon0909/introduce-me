import * as S from './styled'
import LogoText from '@components/header/atoms/LogoText'
import { Menu } from './atoms/MenuLink'
interface Props {
    Logo?: React.ReactNode
    MenuLink?: React.ReactNode
}

export const MainHeader = () => {
    return (
        <Header
            Logo={<LogoText name="heywon0909" />}
            MenuLink={<Menu linkList={['info', 'career', 'project']} />}
        />
    )
}

const Header = ({ Logo, MenuLink }: Props) => {
    return (
        <S.Header>
            {Logo}
            {MenuLink}
        </S.Header>
    )
}
