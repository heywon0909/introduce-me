import { Logo } from 'bunney-ui/Logo'
import { memo } from 'react'
import * as S from './styled'
interface Props {
    name: string
    imgUrl?: string
}
export const LogoText = memo(({ name }: Props) => (
    <S.LogoWrapper to="/">
        {name.split('').map((v, i) => (
            <S.Logo key={v + String(i)}>{v}</S.Logo>
        ))}
        <S.LogoImgWrapper>
            <Logo size={2} color="#3110ff" />
        </S.LogoImgWrapper>
    </S.LogoWrapper>
))

LogoText.displayName = 'LogoText'
